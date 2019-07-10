const Score = require("../models/score");
const User = require("../models/user");

module.exports = {
  scores: async () => {
    try {
      const scores = await Scores.find();
      return scores.map(score => {
        return score;
      });
    } catch (error) {
      throw error;
    }
  },
  createScore: async (args, req) => {
    console.log(req.isAuth);
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const score = new Score({
      gameSize: args.scoreInput.gameSize,
      level: args.scoreInput.level,
      time: args.scoreInput.time,
      championer: req.userId
    });
    let createdScore;
    try {
      const result = await score.save();
      createdScore = result;
      const creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User not found.");
      }

      creator.scores.push(score);
      await creator.save();
      return createdScore;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
