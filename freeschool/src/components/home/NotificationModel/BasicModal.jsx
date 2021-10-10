import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { io } from "socket.io-client";
import { useContext, useState, useRef, useEffect } from "react";
import { Api } from "../../context/ContextApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [notify, setNotify] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNotify("");
  };

  const { user } = useContext(Api);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("https://schoolfree.herokuapp.com");
    socket.current.on("welcome", (data) => {
      //console.log(data);
    });
    socket.current.emit("addedUser", user._id);

    socket.current.on("notifyClass", (data) => {
      console.log(data, "notify");
      if (notify?.senderId !== user._id) {
        setNotify(data);
      }
    });
  }, [user]);

  return (
    <div>
      <span style={{ color: notify ? "red" : "white" }} onClick={handleOpen}>
        Notification
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {notify ? "Class is scheduled" : "You have 0 notification"}
          </Typography>
          {notify && (
            <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Topic - {notify?.lectureDetail?.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Class - {notify?.lectureDetail?.class}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Time - {notify?.lectureDetail?.time}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
