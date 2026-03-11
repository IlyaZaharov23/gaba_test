import type { AlertColor } from "@mui/material";

export type AlertOptions = {
  message: string | React.ReactNode;
  severity?: AlertColor;
  icon?: React.ReactNode | null;
};
