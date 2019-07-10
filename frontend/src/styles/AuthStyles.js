import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export const theme = createMuiTheme({
  palette: {
    primary: cyan
  }
});
