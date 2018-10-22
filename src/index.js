import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class OatsEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="oats_events">
        <div className="event_list">
          <h2>Event List</h2>
        </div>
        <div className="one_event">
          <h2>One Event</h2>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<OatsEvents />, rootElement);
