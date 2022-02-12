import React, { Component } from "react";

export default class Te extends Component {
  state = { inputText: "", textArea: "", select: "male", checkBtn: false,submiter:false };
  onChangeHandler = (e) => {
    if (e.target.type === "text") this.setState({ inputText: e.target.value });
    else if (e.target.type === "textarea")
      this.setState({ textArea: e.target.value });
    else if (e.target.type === "select-one")
      this.setState({ select: e.target.value });
    else if (e.target.type === "checkbox")
      this.setState({ checkBtn: e.target.checked });

    console.log();
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({submiter:true})

    const { inputText, textArea, select, checkBtn } = this.state;
    console.log(inputText, textArea, select, checkBtn);
  };
  render() {
    const { inputText, textArea, select, checkBtn,submiter } = this.state;
    let data;
      if(submiter === true){
        data =  <div>
        <h4>name:{inputText}</h4>
        <h4>about:{textArea}</h4>
        <h4>gender:{select}</h4>
        <h4>ok:{checkBtn}</h4>
      </div>
        console.log("from submited")
      }
    return (
      <div>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <input
            onChange={this.onChangeHandler.bind(this)}
            value={inputText}
            placeholder="name..."
            type="text"
          />
          <br />{" "}
          <textarea
            type="textarea"
            onChange={this.onChangeHandler.bind(this)}
            value={textArea}
            name="textarea"
          ></textarea>
          <br />
          <select
            onChange={this.onChangeHandler.bind(this)}
            value={select}
            type="select"
          >
            <option value="male">Male</option>
            <option value="famale">Famale</option>
          </select>
          <input
            onChange={this.onChangeHandler.bind(this)}
            checked={checkBtn}
            type="checkbox"
          />
          <button>Submit</button>
        </form>
        <br />
        <br />
         {data}
      </div>
    );
  }
}
