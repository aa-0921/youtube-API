import "./assets/App.css";
import React from "react";
// import { MemberList } from "./pages/MemberList";
// import { PhotoList } from "./pages/PhotoList";
import YoutubeList from "./YouTube/pages/YoutubeList";

export const App = () => {
  return (
    <div>
      {/* <MemberList /> */}
      <React.StrictMode>
        <YoutubeList />
      </React.StrictMode>
    </div>
  );
};
