import React from "react";

class Today extends React.Component {
  render() {
    return (
      <div className="taskContainer today">
        <div className="taskHeader today">Today</div>
        {Object.keys(this.props.today.items).map(key => (
          <div className="taskItem">{this.props.today.items[key]}</div>
        ))}
      </div>
    );
  }
}

export default Today;
