import {
  PAGINATION_HEIGHT,
  PAGINATION_PADDING_Y,
} from "../PaginationWrapper/constants";
import {
  USERS_PAGE_GAP,
  SEARCH_INPUT_HEIGHT,
} from "../../pages/Users/constants";
import { USERS_LIST_GAP } from "./constants";

export const styles = {
  usersListWrapper: (isSearchMode: boolean) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    gap: `${USERS_LIST_GAP}px`,
    height: isSearchMode
      ? // 16px - root padding Y
        `calc(100vh - ${USERS_PAGE_GAP + SEARCH_INPUT_HEIGHT + 16 * 2}px)`
      : `calc(100vh - ${PAGINATION_HEIGHT + PAGINATION_PADDING_Y * 2 + USERS_PAGE_GAP + SEARCH_INPUT_HEIGHT}px)`,
    overflowY: "auto",
  }),
};
