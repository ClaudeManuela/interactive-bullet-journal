import React from 'react';

class Timestamp extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Timestamp">
        <p>{this.state.curTime}</p>
      </div>
    );
  }
}

export default Timestamp;