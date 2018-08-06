import React from 'react';

class Main extends React.Component {
  state = {
    content: [
        {
            title: "Task Type 1",
            items: ["test item 1"]
        },
        {
            title: "Task Type 2",
            items: ["test item 1"]
        }
    ]
  };
  render() {
    return <div>
        {Object.keys(this.state.content).map(key => (
          <div key={key} index={key}>
            {this.state.content[key].title}
                {Object.keys(this.state.content[key].items).map(key2 => (
                    <div>{this.state.content[key].items[key2]}</div>
                ))}
          </div>
        ))}
      </div>;
  }
}

export default Main;