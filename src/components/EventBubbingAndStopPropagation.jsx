function EventBubblingAndStopPropagation() {
  const EventHandler = (event) => {
    // this is child event | stopPropagation use chlid event
    event.stopPropagation();
    console.log("Child Event: ", event);
  };
  const HandleParentEvent = (event) => {
    console.log("Parent Event: ", event);
  };
  return (
    <div>
      <div className="text-center bg-gray-500 py-2" onClick={HandleParentEvent}>
        <button
          onClick={(event) => EventHandler(event)}
          className="px-4 py-2 bg-red-400 text-white text-center rounded"
        >
          click here
        </button>
      </div>
    </div>
  );
}

export default EventBubblingAndStopPropagation;
