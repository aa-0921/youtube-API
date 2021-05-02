import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { VideoList } from "../components/VideoList";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YoutubeList = () => {
  const [videos, setVideos] = useState([]);

  const onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  };
  console.log(videos);

  return (
    <>
      <Header onSerchYoutube={onSerchYoutube} />
      {/* 追加 */}
      <VideoList videos={videos} />
    </>
  );
};
