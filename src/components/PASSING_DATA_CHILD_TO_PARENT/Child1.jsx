function Child1(props) {
  const { body, onChildData } = props;

  onChildData("i am data from child one");
  return <div>{body}</div>;
}

export default Child1;
