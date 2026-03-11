import axios from "axios";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../api";
import { Box, CircularProgress } from "@mui/material";
import type { User, ApiResponse } from "../../types/user";
import { UserItem } from "../UserItem";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<ApiResponse>(
        API_ENDPOINTS.GET_PAGINATION_USERS(16, 0),
      );
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {!isLoading ? (
        users.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};
