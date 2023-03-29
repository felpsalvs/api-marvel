import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";


interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface Props {
  comic: Comic;
}

const ComicDetailsModal = ({ comic }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Detalhes
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{comic.title}</DialogTitle>
        <DialogContent>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <Typography>{comic.description}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ComicDetailsModal;
