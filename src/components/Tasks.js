import React from "react";

class Tasks extends React.Component {
  render() {
    return (
      <div className="allTasks">
        {Object.keys(this.props.content).map(key => (
          <div
            key={key}
            index={key}
            className={`taskContainer ${this.props.content[key].color}`}
          >
            <div className={`taskHeader ${this.props.content[key].color}`}>
              {this.props.content[key].title}
            </div>
            {Object.keys(this.props.content[key].items).map(key2 => (
              <div className="taskItem">
                {this.props.content[key].items[key2]}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Tasks;
