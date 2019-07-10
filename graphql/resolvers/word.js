const Word = require("../models/word");
const User = require("../models/user");

const transformWord = word => {
  return {
    ...word._doc,
    _id: word.id,
    creator: user.bind(this, words.creator)
  };
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: words.bind(this, user._doc.createdEvents)
    };
  } catch (error) {
    throw error;
  }
};

const words = async eventIds => {
  try {
    const words = await Event.find({ _id: { $in: wordIds } });
    return words.map(word => {
      return transformEvent(word);
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
    words: async () => {
      try {
        const words = await Word.find();
        return words.map(word => {
          return transformWord(word);
        });
      } catch (error) {
        throw error;
      }
    },
  createWord: async (args, req) => {
    console.log(req.isAuth);
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const word = new Word({
      polishWord: args.wordInput.polishWord,
      englishWord: args.wordInput.englishWord,
      quantityToUse: +args.wordInput.quantityToUse,
      level: args.wordInput.level,
      creator: req.userId
    });
    let createdWord;
    try {
      const result = await word.save();
      createdWord = transformWord(result);
      const creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User not found.");
      }

      creator.createdWords.push(word);
      await creator.save();
      return createdWord;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
