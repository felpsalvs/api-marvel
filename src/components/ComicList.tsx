import { Grid, Paper } from "@mui/material";
import React from "react";
import ComicDetailsModal from "./ComicDetailsModal";

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
  comics: Comic[];
}

const ComicList = ({ comics }: Props) => {
  return (
    <Grid container spacing={2}>
      {comics.map((comic) => (
        <Grid item xs={12} md={4} key={comic.id}>
          <Paper>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
            <h1>{comic.title}</h1>
            <ComicDetailsModal comic={comic} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ComicList;
