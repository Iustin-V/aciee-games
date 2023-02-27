/*
 * Using ES6 Syntax
 * https://facebook.github.io/react/docs/reusable-components.html#es6-classes
 */

import React from "react";
import ReactDOM from "react-dom";

import "./TypingGame.scss";
import { Footer } from "./Footer";
import { BackButton } from "./BackButton";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      activeWord: [],
      activeLetters: [],
      wordsMastered: 0,
      timer: 0,
      wordList: [],
      font: "sans",
    };
    this.getWordList = this.getWordList.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.getWord = this.getWord.bind(this);
    this.checkEqual = this.checkEqual.bind(this);
    this.timer = this.timer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.rating = this.rating.bind(this);
    this.interval = this.interval;
  }

  componentWillMount() {
    document.addEventListener(
      "keydown",
      function (e) {
        e.preventDefault();

        // handle backspace and delete
        if (e.which === 46 || e.which === 8) {
          this.setState({
            activeLetters: this.state.activeLetters.slice(0, -1),
          });
          return true;
        }

        // otherwise add character to array
        let char = String.fromCharCode(e.which);
        let newActiveLetters = this.state.activeLetters;
        newActiveLetters.push(char);
        if (this.checkEqual(newActiveLetters, this.state.activeWord)) {
          this.setState({
            activeWord: this.getWord(),
            activeLetters: [],
            wordsMastered: this.state.wordsMastered + 1,
          });
        } else {
          this.setState({
            activeLetters: newActiveLetters,
          });
        }
      }.bind(this)
    );
  }

  checkEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = arr1.length; i--; ) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }

  getRandomInt(min = 0, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  timer() {
    let newTime = this.state.timer - 1;
    this.setState({
      timer: newTime,
    });
    if (newTime === 0) {
      window.clearInterval(this.interval);
    }
  }

  rating() {
    if (this.state.wordsMastered < 5) {
      return "😫";
    } else if (this.state.wordsMastered < 10) {
      return "😐";
    } else if (this.state.wordsMastered < 15) {
      return "😊";
    } else if (this.state.wordsMastered < 20) {
      return "😃";
    } else {
      return "😎";
    }
  }

  startGame() {
    this.setState(
      {
        wordList: this.getWordList(),
      },
      function () {
        let word = this.getWord();
        this.setState({
          activeLetters: [],

          activeWord: this.getWord(),
          gameStarted: true,
          wordsMastered: 0,
          timer: 30,
        });
      }
    );
    ReactDOM.findDOMNode(this).querySelector(".secret-input").focus();

    this.interval = setInterval(this.timer, 1000);
  }

  getWord() {
    let index = this.getRandomInt(0, this.state.wordList.length);
    let wordToUse = this.state.wordList[index];
    let newWordsList = this.state.wordList;
    newWordsList.splice(index, 1);
    this.setState({
      wordList: newWordsList,
    });

    return wordToUse.split("");
  }

  getWordList() {
    const list = [
      "SERIOZITATE",
      "ANALFABET",
      "ANALFABET",
      "SCENARIU",
      "VISCOZITATE",
      "DEVENIRE",
      "CONTRACTILITATE",
      "VOLTAMETRU",
      "BALIMEZ",
      "NARATOR",
      "NACRU",
      "RANDALINARE",
      "NICHELAJ",
      "PENSIUNE",
      "TRENAJ",
      "HIPNOTERAPIE",
      "REGALITATE",
      "TERAPEUT",
      "GRADARE",
      "HEMODIAGNOSTIC",
      "GAT",
      "DIFTONG",
      "INTELECT",
      "ROTAMETRU",
      "RECOACERE",
      "INDONEZIAN",
      "PARTIZAN",
      "ACORDEON",
      "ACCIDENT",
      "STEREOTIPAR",
      "LUNGMETRAJ",

      "POLITEISM",
      "UTILITARISM",
      "COMPANION",
      "SUPERFOSFAT",
      "DESPACHETARE",
      "POP",
      "CAMPING",
      "AZEOTROPIE",
      "CENTROMER",
      "HEMODIALIZOR",
      "STRIGAT",
      "FOTOPERIODISM",
      "AUTOSTROPITOARE",
    ];
    return list;
  }

  render() {
    let letters = [];
    let board;
    this.state.activeWord.map((current, index) => {
      let correct;
      if (this.state.activeLetters[index] === undefined) {
        correct = "undefined";
      } else if (this.state.activeLetters[index] === current) {
        correct = "true";
      } else {
        correct = "false";
      }
      letters.push(
        <span className="game-letter" key={index} data-correct={correct}>
          {current}
        </span>
      );
    });
    if (!this.state.gameStarted) {
      board = (
        <div className="game__board" key="start">
          <p>{"Scrie cate cuvinte poti inainte de a se scurge timpul!"}</p>
          <button className="button" onClick={this.startGame}>
            Start joc
          </button>
        </div>
      );
    } else if (this.state.timer && this.state.gameStarted) {
      board = (
        <div className="game__board" key="inprogress">
          <div className="game__score">
            {"Scor: " + this.state.wordsMastered}
          </div>
          {/*<ReactCSSTransitionGroup*/}
          {/*  transitionName="fade"*/}
          {/*  transitionEnterTimeout={500}*/}
          {/*  transitionLeaveTimeout={500}*/}
          {/*>*/}
          <div className="game__words" key={this.state.activeWord}>
            {letters}
          </div>
          {/*</ReactCSSTransitionGroup>*/}
          <div className="game__timer">{"Timp ramas: " + this.state.timer}</div>
        </div>
      );
    } else {
      board = (
        <div className="game__board" key="timesup">
          <div className="game__words">
            <p>{"Timpus s-a scurs!"}</p>
            <p>
              {"Scor final: " + this.state.wordsMastered}
              <span className="emoji">{this.rating()}</span>
            </p>
            <button className="button" onClick={this.startGame}>
              {"Joaca din nou"}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="game-page">
        <BackButton />
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="game">
          {board}
          <input className="secret-input" type="text" />
        </div>
        <Footer />
      </div>
    );
  }
}

// Render the component in div#app
// ReactDOM.render(<Component/>, document.getElementById('app'));
export default Component;
