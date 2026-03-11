import { Box } from "@mui/material";
import { UserItem } from "../UserItem";
import { PaginationWrapper } from "../PaginationWrapper";
import { styles } from "./styles";
import type { UsersListProps } from "./types";

export const UsersList = ({
  users,
  isLoading,
  currentPage,
  totalItems,
  setCurrentPage,
  isSearchMode,
}: UsersListProps) => {
  return (
    <PaginationWrapper
      isLoading={isLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={totalItems}
      isSearchMode={isSearchMode}
    >
      <Box sx={styles.usersListWrapper(isSearchMode)}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Box>
    </PaginationWrapper>
  );
};
