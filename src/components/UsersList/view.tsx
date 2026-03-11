import { Box, CircularProgress } from "@mui/material";
import { UserItem } from "../UserItem";
import { PaginationWrapper } from "../PaginationWrapper";
import { styles } from "./styles";
import type { UsersListProps } from "./types";

export const USERS_LIMIT = 9;

export const UsersList = ({
  users,
  isLoading,
  currentPage,
  totalItems,
  setIsLoading,
  setCurrentPage,
  isSearchMode,
}: UsersListProps) => {
  return (
    <PaginationWrapper
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={totalItems}
      isSearchMode={isSearchMode}
    >
      <Box sx={styles.usersListWrapper}>
        {isLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          users.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </Box>
    </PaginationWrapper>
  );
};
