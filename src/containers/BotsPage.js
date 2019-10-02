import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    cardClicked: false,
    botArmy: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots =>
        this.setState({
          bots: bots
        })
      );
    // console.log(this.state.botArmy.push("bot"));
  }

  handleCardClick = (e, id) => {
    // console.log("clicked!");
    let bot = this.state.bots.find(bot => bot.id === id);
    let botArmycopy = [...this.state.botArmy];
    botArmycopy.push(bot);
    this.setState({
      cardClicked: true,
      botArmy: botArmycopy
    });

    console.log(bot);
  };
  render() {
    return (
      <div>
        <YourBotArmy
          cardClicked={this.state.cardClicked}
          botArmy={this.state.botArmy}
        />
        <BotCollection
          bots={this.state.bots}
          handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default BotsPage;
