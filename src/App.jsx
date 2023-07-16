import React from "react";
import ReactIcon from "./components/reactIcon";
import PassingDataChildToParent from "./components/PASSING_DATA_CHILD_TO_PARENT/PassingDataChildToParent";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20 text-center">
        <span className="text-[50px]">{/* <ReactIcon /> */}</span>

        {/* <EventBubblingAndStopPropagation /> */}
        <PassingDataChildToParent />
      </div>
    </>
  );
}

export default App;
