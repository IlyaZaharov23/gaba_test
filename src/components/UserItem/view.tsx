import { Avatar, Box, IconButton, Typography } from "@mui/material";
import type { User } from "../../types/user";
import { black, borderGray, darkGray, semiDarkGray } from "../../shared/colors";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const UserItem = ({ user }: { user: User }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(user.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        border: `1.5px solid ${borderGray}`,
        borderRadius: "16px",
        padding: "0.5rem 1rem",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        "&:hover": {
          cursor: "pointer",
          borderColor: semiDarkGray,
        },
      }}
    >
      <Avatar
        src={user.image}
        alt={user.username}
        sx={{ height: "96px", width: "96px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: "600", color: black }}
        >
          {user.firstName} {user.lastName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <Typography>{user.email}</Typography>
          <IconButton onClick={handleCopyToClipboard}>
            <ContentCopyIcon sx={{ height: "1rem", width: "1rem" }} />
          </IconButton>
        </Box>
        <Typography
          sx={{ fontSize: "1rem", fontWeight: "500", color: darkGray }}
        >
          {user.company.name}
        </Typography>
        <Typography
          sx={{ fontSize: "0.875rem", fontWeight: "400", color: darkGray }}
        >
          {user.company.title}
        </Typography>
      </Box>
    </Box>
  );
};
