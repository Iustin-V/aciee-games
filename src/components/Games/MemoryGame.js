import React from "react";
import "./MemoryGame.scss";
import { Footer } from "./Footer";

class PlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFlipped: 0,
      score: 0,
      memoryCards: [
        "angular2",
        "vue",
        "react",
        "grunt",
        "phantomjs",
        // "ember",
        // "babel",
        // "ionic",
        // "gulp",
        // "meteor",
        // "yeoman",
        // "yarn",
        // "nodejs",
        // "bower",
        // "browserify",
      ],
      duplicatedMemoryCards: [],
      randomizedMemoryCards: [],
      finalizedMemoryCards: [],
      openedMemoryCards: [],
    };
    this.start();
  }
  handleClick(name, index) {
    if (this.state.openedMemoryCards.length === 2) {
      setTimeout(() => {
        this.check();
      }, 750);
    } else {
      let framework = {
        name,
        index,
      };
      let finalizedMemoryCards = this.state.finalizedMemoryCards;
      let memoryCards = this.state.openedMemoryCards;
      finalizedMemoryCards[index].close = false;
      memoryCards.push(framework);
      this.setState({
        openedMemoryCards: memoryCards,
        finalizedMemoryCards: finalizedMemoryCards,
      });
      if (this.state.openedMemoryCards.length === 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }

  check() {
    document.getElementById("show").classList.add("disabled");

    let finalizedMemoryCards = this.state.finalizedMemoryCards;
    if (
      this.state.openedMemoryCards[0].name ===
        this.state.openedMemoryCards[1].name &&
      this.state.openedMemoryCards[0].index !==
        this.state.openedMemoryCards[1].index
    ) {
      finalizedMemoryCards[
        this.state.openedMemoryCards[0].index
      ].complete = true;
      finalizedMemoryCards[
        this.state.openedMemoryCards[1].index
      ].complete = true;
      this.state.score += 300;
      this.state.cardFlipped += 2;
    } else {
      finalizedMemoryCards[this.state.openedMemoryCards[0].index].close = true;
      finalizedMemoryCards[this.state.openedMemoryCards[1].index].close = true;
      if (this.state.score > 0) {
        this.state.score -= 100;
      }
    }
    this.setState({
      finalizedMemoryCards,
      openedMemoryCards: [],
    });
  }
  start() {
    let finalizedMemoryCards = [];
    this.state.duplicatedMemoryCards = this.state.memoryCards.concat(
      this.state.memoryCards
    );
    this.state.randomizedMemoryCards = this.shuffle(
      this.state.duplicatedMemoryCards
    );
    this.state.randomizedMemoryCards.map((name, index) => {
      finalizedMemoryCards.push({
        name,
        close: true,
        complete: false,
        fail: false,
      });
    });
    this.state.finalizedMemoryCards = finalizedMemoryCards;
  }
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  handleRestart() {
    let finalizedMemoryCards = this.state.finalizedMemoryCards;
    finalizedMemoryCards.map((card, index) => {
      finalizedMemoryCards[index].close = true;
      finalizedMemoryCards[index].complete = false;
    });

    document.getElementById("show").classList.remove("disabled");

    this.state.finalizedMemoryCards = this.shuffle(finalizedMemoryCards);
    this.setState({
      score: 0,
      cardFlipped: 0,
      finalizedMemoryCards,
    });
    this.start();
  }
  showCards() {
    if (document.getElementById("show").classList.contains("disabled")) {
      return;
    } else {
      const cardCollection = document.getElementsByClassName("memoryCard");
      const cardArr = Array.from(cardCollection);
      cardArr?.map((item, index) => {
        item?.classList?.add("matched");

        const timeout = setTimeout(() => {
          item?.classList?.remove("matched");
        }, 2000);
        return () => clearTimeout(timeout);
      });
      document.getElementById("show").classList.add("disabled");
    }
  }
  render() {
    return (
      <div className="game-page">
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="memoryGameContainer">
          <div className="memoryScore">Scor: {this.state.score}</div>
          <div
            id="show"
            className="startButton"
            onClick={() => this.showCards()}
          >
            Arata cardurile
          </div>
          <div className="playground">
            <div className="cardContainer">
              {this.state.finalizedMemoryCards.map((framework, index) => {
                return (
                  <Card
                    key={index}
                    framework={framework.name}
                    click={() => {
                      this.handleClick(framework.name, index);
                    }}
                    close={framework.close}
                    complete={framework.complete}
                  />
                );
              })}
            </div>
          </div>
          <div className="gameData">
            <div
              className={`startButton ${
                this.state.cardFlipped ===
                this.state.finalizedMemoryCards.length
                  ? ""
                  : "hide"
              }`}
              onClick={() => this.handleRestart()}
            >
              Joaca din nou
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clicked(framework) {
    this.props.click(framework);
  }
  render() {
    return (
      <div
        className={
          "memoryCard" +
          (!this.props.close ? " opened" : "") +
          (this.props.complete ? " matched" : "")
        }
        onClick={() => this.clicked(this.props.framework)}
      >
        <div className="front">?</div>
        <div className="back">
          <img
            src={
              "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
              this.props.framework +
              ".png"
            }
          />
        </div>
      </div>
    );
  }
}

// ReactDOM.render( <PlayGround/>, document.getElementById('app'))
export default PlayGround;
