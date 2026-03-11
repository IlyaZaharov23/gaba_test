import { Box } from "@mui/material";
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
}: UsersListProps) => {
  return (
    <PaginationWrapper
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={totalItems}
    >
      <Box sx={styles.usersListWrapper}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Box>
    </PaginationWrapper>
  );
};
