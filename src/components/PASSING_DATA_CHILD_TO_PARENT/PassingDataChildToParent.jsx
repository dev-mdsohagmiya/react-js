import Child1 from "./Child1";

function PassingDataChildToParent() {
  const handleChild1Data = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child1 body="hello i am child1" onChildData={handleChild1Data} />
    </div>
  );
}

export default PassingDataChildToParent;
