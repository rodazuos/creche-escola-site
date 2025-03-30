import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";

const Loading = (props) => {
  const { open = false } = props;

  return (
    <Dialog
      open={open}
      sx={{ zIndex: 9999 }}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <CircularProgress color="secondary" sx={{ margin: "20px" }} />
    </Dialog>
  );
};

export default Loading;
