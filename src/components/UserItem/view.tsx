import { Avatar, Box, IconButton, Typography } from "@mui/material";
import type { SingleUser } from "../../types/user";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styles } from "./styles";

export const UserItem = ({ user }: { user: SingleUser }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(user.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={styles.mainUserWrapper}>
      <Box sx={styles.mainUserInfoWrapper}>
        <Avatar src={user.image} alt={user.username} sx={styles.userAvatar} />
        <Box sx={{ ...styles.userInfoWrapper, ...styles.userMainInfo }}>
          <Typography sx={styles.userNameText}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography sx={styles.userCompanyNameText}>
            {user.company.name}
          </Typography>
          <Typography sx={styles.userSecondaryInfoText}>
            {user.company.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...styles.userInfoWrapper, ...styles.userSecondaryInfo }}>
        <Box sx={styles.userSubInfoWrapper}>
          <Typography sx={styles.userSecondaryInfoText}>Role:</Typography>
          <Typography sx={styles.userRoleText}>{user.role}</Typography>
        </Box>
        <Box sx={styles.userSubInfoWrapper}>
          <Typography sx={styles.userSecondaryInfoText}>
            {user.email}
          </Typography>
          <IconButton onClick={handleCopyToClipboard} sx={styles.copyButton}>
            <ContentCopyIcon sx={styles.copyIcon} />
          </IconButton>
        </Box>
        <Typography sx={styles.userSecondaryInfoText}>{user.phone}</Typography>
      </Box>
    </Box>
  );
};
