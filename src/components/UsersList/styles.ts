export const styles = {
  usersListWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    gap: "1rem",
    // 69px - pagination height, 32px - pagination padding Y, 56px - search input height, 16px - gap between searchInput & usersList
    height: `calc(100vh - 173px)`,
    overflowY: "auto",
  },
};
