import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../css/App.css";
import Tasks from "./Tasks";
import Today from "./Today";

class App extends Component {
  state = {
    content: [
      {
        title: "Home Tasks",
        color: "rose",
        items: [
          "Wash dishes",
          "Pack Laundry",
          "Take over the world",
          "Buy more coffee"
        ]
      },
      {
        title: "French Tasks",
        color: "forest",
        items: [
          "Finish Daily Duolingo",
          "Write a paragraph in French",
          "Listen to a new French song"
        ]
      },
      {
        title: "Computer Tasks",
        color: "sea",
        items: ["Clean filesystem", "Update wallpaper"]
      }
    ],
    today: {
      items: ["Finish this app", "Get some sleep"]
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Task Manager</h1>
        </header>
        <div className="parentContainer">
          <Tasks content={this.state.content} />
          <Today today={this.state.today} />
        </div>
      </div>
    );
  }
}

export default App;
