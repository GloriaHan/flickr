import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import queryString from "query-string";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export default function PhotoPage() {
  const params = useParams();
  const [photoDetail, setPhotoDetail] = useState("");
  // const location = useLocation();
  // const searchParams = queryString.parse(location.search);

  useEffect(() => {
    const fetchPhoto = async () => {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${FLICKR_API_KEY}&photo_id=${params.queryText}&format=json&nojsoncallback=1`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };

    fetchPhoto().then((response) => {
      setPhotoDetail(response.photo);
    });
  }, [params.queryText]);

 
if (!photoDetail) return null;
  return (
    <Box sx={{ my: 4 }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://live.staticflickr.com/${photoDetail.server}/${params.queryText}_${photoDetail.secret}_w.jpg`}
            alt={`${params.queryText}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p>Titile: {photoDetail.title._content}</p>
              <p>Author: {photoDetail.owner.realname || photoDetail.owner.username}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
