class BindHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleEcrement = () => {
    this.setSate({
      counter: this.state.counter + 1,
    });
  };

  render() {
    // rconst for constructor
    const { counter } = this.state;
    return (
      <div>
        <div>Count: {counter}</div>
        <button onClick={this.handleEcrement}>click here</button>
      </div>
    );
  }
}

export default BindHandler;
