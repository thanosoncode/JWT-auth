import { makeStyles } from "tss-react/mui";
import { theme } from "../../theme";

export const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 320,
    padding: "24px",
    borderTop: `4px solid ${theme.palette.primary.main}`,
  },
  title: {
    letterSpacing: "2px",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
  },
  submitButton: {
    marginTop: "32px",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12px",
  },
  footerButton: {
    textTransform: "capitalize",
    "&:hover": {
      background: "transparent",
    },
  },
}));
