import { Box, Button, Stack, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ModalMessage = (props) => {
  const { listMessage = Array(), handleCloseMessage } = props;

  return (
    <Box sx={style}>
      <Stack
        padding={2}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Stack>
          {listMessage.map((message, idx) => (
            <Typography key={idx}>{message}</Typography>
          ))}
        </Stack>
        <Button
          variant="contained"
          onClick={() => handleCloseMessage({ open: false, listMessage: [] })}
        >
          OK
        </Button>
      </Stack>
    </Box>
  );
};

export default ModalMessage;
