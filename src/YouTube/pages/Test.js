import "../../assets/App.css";

import React, { useState, useEffect } from "react";

export const Test = () => {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    setTextList(["123", "456", "789"]);
  }, []);

  return (
    <div>
      {textList.map((text) => (
        <div>{text}</div>
      ))}
    </div>
  );
};
