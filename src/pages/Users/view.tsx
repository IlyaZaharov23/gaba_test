import { useState, type ChangeEvent } from "react";
import { UsersList } from "../../components/UsersList";
import { Box, TextField } from "@mui/material";
import { useGetUsers } from "../../hooks/useGetUsers";
import { styles } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { useActionsAlert } from "../../hooks/useActionsAlert";
import { CheckCircleOutline } from "@mui/icons-material";

function Users() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { showAlert, AlertComponent } = useActionsAlert();

  const {
    users,
    isLoading,
    currentPage,
    totalItems,
    setCurrentPage,
    isSearchMode,
  } = useGetUsers(debouncedSearchQuery, showAlert, {
    message: "Users successfully loaded.",
    icon: <CheckCircleOutline />,
  });

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Box sx={styles.mainPageWrapper}>
      <TextField
        placeholder="Type username"
        onChange={handleChangeQuery}
        value={searchQuery}
        sx={styles.searchInput}
      />
      <UsersList
        users={users}
        isLoading={isLoading}
        isSearchMode={isSearchMode}
        currentPage={currentPage}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
      />
      {AlertComponent}
    </Box>
  );
}

export default Users;
