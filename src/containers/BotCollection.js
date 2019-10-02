import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/* I want to map through my array of bots, and for each one, render a
          BotCard */}
          {this.props.bots.map(bot => {
            return (
              <BotCard bot={bot} handleCardClick={this.props.handleCardClick} />
            );
          })}
          {/* {console.log(this.props.bots)} Collection of all bots */}
        </div>
      </div>
    );
  }
}

export default BotCollection;
