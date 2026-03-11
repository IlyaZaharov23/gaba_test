import { borderGray, semiDarkGray, black, darkGray } from "../../shared/colors";

export const USER_ITEM_HEIGHT = 94;

export const styles = {
  mainUserWrapper: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    border: `1.5px solid ${borderGray}`,
    borderRadius: "16px",
    padding: "0.5rem 1rem",
    height: `${USER_ITEM_HEIGHT}px`,
    gap: "1rem",
    "&:hover": {
      cursor: "pointer",
      borderColor: semiDarkGray,
    },
  },
  mainUserInfoWrapper: {
    display: "flex",
    gap: "1.5rem",
  },
  userAvatar: {
    height: "72px",
    width: "72px",
  },
  userInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  userMainInfo: {
    alignItems: "flex-start",
  },
  userSecondaryInfo: {
    alignItems: "flex-end",
  },
  userSubInfoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
  },
  userNameText: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: black,
  },
  userCompanyNameText: {
    fontSize: "1rem",
    fontWeight: "600",
    color: darkGray,
  },
  userSecondaryInfoText: {
    fontSize: "0.875rem",
    fontWeight: "400",
    color: `${black}80`,
  },
  userRoleText: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: `${black}80`,
  },
  copyButton: {
    padding: "0",
    "&:focus": {
      outline: "none", // убирает синюю обводку
    },
    "&.Mui-focusVisible": {
      outline: "none", // убирает обводку при фокусе с клавиатуры
    },
  },
  copyIcon: {
    height: "1rem",
    width: "1rem",
  },
};
