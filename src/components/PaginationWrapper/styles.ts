import { PAGINATION_HEIGHT, PAGINATION_PADDING_Y } from "./constants";
import {
  USERS_PAGE_GAP,
  SEARCH_INPUT_HEIGHT,
} from "../../pages/Users/constants";
import { black, hoverGray } from "../../shared/colors";

export const styles = {
  paginationWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  pagesWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: `${PAGINATION_PADDING_Y}px 8px`,
    width: "100%",
    gap: "0rem",
    height: `${PAGINATION_HEIGHT}px`,
  },
  progressWrapper: (isSearchMode: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: isSearchMode
      ? // 16px - root padding Y
        `calc(100vh - ${USERS_PAGE_GAP + SEARCH_INPUT_HEIGHT + 16 * 2}px)`
      : `calc(100vh - ${PAGINATION_HEIGHT + PAGINATION_PADDING_Y * 2 + USERS_PAGE_GAP + SEARCH_INPUT_HEIGHT}px)`,
  }),
  paginationButton: (isCurrentPage: boolean) => ({
    color: black,
    fontWeight: isCurrentPage ? "600" : "400",
    "&:focus": {
      outline: "none", // убирает синюю обводку
    },
    "&.Mui-focusVisible": {
      outline: "none", // убирает обводку при фокусе с клавиатуры
    },
    "&:hover": {
      background: hoverGray,
    },
  }),
};
