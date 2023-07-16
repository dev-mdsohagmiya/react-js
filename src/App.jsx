import React from "react";
import ReactIcon from "./components/reactIcon";
import EventBubblingAndStopPropagation from "./components/EventBubbingAndStopPropagation";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <span className="text-[50px]">{/* <ReactIcon /> */}</span>

        <EventBubblingAndStopPropagation />
      </div>
    </>
  );
}

export default App;
