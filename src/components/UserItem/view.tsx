import { Avatar, Box, Typography } from "@mui/material";
import type { User } from "../../types/user";

export const UserItem = ({ user }: { user: User }) => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Avatar
        src={user.image}
        alt={user.username}
        sx={{ border: "1px solid black" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography>{user.company.title}</Typography>
        <Typography>{user.email}</Typography>
      </Box>
    </Box>
  );
};
