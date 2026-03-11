import { USERS_PAGE_GAP, SEARCH_INPUT_HEIGHT } from "./constants";
export const styles = {
  mainPageWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: `${USERS_PAGE_GAP}px`,
    width: "45vw",
  },
  searchInput: {
    height: `${SEARCH_INPUT_HEIGHT}px`,
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
};
