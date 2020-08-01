import React from "react";
import Hello from "../Hello";

const Main = (props: any) => {
  return (
    <div>
      Main app
      <br />
      <Hello test="Hello from a component..." />
    </div>
  );
};

export default Main;
