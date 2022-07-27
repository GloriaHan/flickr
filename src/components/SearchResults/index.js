import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export default function SearchResults() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState("");
  // const { serverId, photoId, secret } = resultData;

  const fetchFlickr = async () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${params.queryText}&format=json&nojsoncallback=1`;
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    fetchFlickr().then((response) => {
      setResultData(response);
    });
    console.log(resultData);
  }, [params.queryText]);

  return (
    <>
      <p>Search Results : {params.queryText}</p>
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {resultData &&
          resultData.photos.photo.map((item) => (
            <Link
             to={`/photo/${item.id}?${queryString.stringify({
                title: item.title,
                server: item.server,
                secret: item.secret,
              })}`}
              key={item.id}
            >
              <ImageListItem>
                <img
                  src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`}
                  alt={`${params.queryText}`}
                />

                <ImageListItemBar title={item.title} />
              </ImageListItem>
            </Link>
          ))}
      </ImageList>
    </>
  );
}
