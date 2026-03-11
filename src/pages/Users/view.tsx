import { useState, type ChangeEvent } from "react";
import { UsersList } from "../../components/UsersList";
import { Box, TextField } from "@mui/material";
import { useGetUsers } from "../../hooks/useGetUsers";
import { styles } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";

function Users() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const {
    users,
    isLoading,
    currentPage,
    totalItems,
    setCurrentPage,
    setIsLoading,
    isSearchMode,
  } = useGetUsers(debouncedSearchQuery);

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Box sx={styles.mainPageWrapper}>
      <TextField
        placeholder="Type username"
        onChange={handleChangeQuery}
        value={searchQuery}
      />
      <UsersList
        users={users}
        isLoading={isLoading}
        isSearchMode={isSearchMode}
        currentPage={currentPage}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
}

export default Users;
