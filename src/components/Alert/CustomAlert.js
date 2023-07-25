import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import "./CustomAlert.css";

export default function CustomAlert(props) {

  return (
    <div className="alert" needAlert={props.needAlert}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>Disallowed operation!</AlertTitle>
          Every law at the universe said you can't divide by 0.<strong></strong>
        </Alert>
      </Stack>
    </div>
  );
}
