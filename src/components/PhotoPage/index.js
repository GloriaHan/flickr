import React from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PhotoPage() {
  const location = useLocation();
  const params = useParams();
  const searchParams = queryString.parse(location.search);
  console.log(searchParams);
  return (
    <Box sx={{ my:4}} >
      <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://live.staticflickr.com/${searchParams.server}/${params.queryText}_${searchParams.secret}.jpg`}
            alt={`${params.queryText}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {searchParams.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
