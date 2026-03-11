import { useState } from "react";
import type { AlertOptions } from "./types";
import { Snackbar, Alert } from "@mui/material";
import { styles } from "./styles";

export const useActionsAlert = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    message: "",
    severity: "info",
    icon: null,
  });
  const showAlert = (options: AlertOptions) => {
    setAlertOptions(options);
    setOpenAlert(true);
  };

  const AlertComponent = (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => setOpenAlert(false)}
        severity={alertOptions.severity}
        variant="filled"
        sx={styles.alert}
      >
        {alertOptions.message}
      </Alert>
    </Snackbar>
  );

  return { showAlert, AlertComponent };
};
