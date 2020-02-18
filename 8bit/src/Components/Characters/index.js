import React from "react";

import megaMan1 from "./megaman1.png";
import megaMan2 from "./megaman2.png";
import megaMan3 from "./megaman3.png";
import megaMan4 from "./megaman4.png";
import megaManStanding from "./megamanStanding.png";

import metroid1 from "./metroid1.png";
import metroid2 from "./metroid2.png";
import metroid3 from "./metroid3.png";
import metroid4 from "./metroid4.png";
import metroid5 from "./metroid5.png";
import metroid6 from "./metroid6.png";
import metroid7 from "./metroid7.png";

import yoshi1 from "./yoshi1.png";
import yoshi2 from "./yoshi2.png";
import yoshi3 from "./yoshi3.png";
import yoshi4 from "./yoshi4.png";
import yoshi5 from "./yoshi5.png";
import yoshi6 from "./yoshi6.png";
import yoshiStanding from "./yoshiStanding.jpg";

export const megaMan = [
  megaManStanding,
  megaMan1,
  megaMan2,
  megaMan3,
  megaMan4
];

export const metroid = [
  metroid1,
  metroid2,
  metroid3,
  metroid4,
  metroid5,
  metroid6,
  metroid7
];

export const yoshi = [
  yoshiStanding,
  yoshi1,
  yoshi2,
  yoshi3,
  yoshi4,
  yoshi5,
  yoshi6
];

export class Character extends React.Component {
  state = {
    character: yoshi,
    index: 0
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  handleKey = e => {
    let keys = {
      ArrowRight: true,
      ArrowLeft: true,
      ArrowUp: true
    };

    if (keys[e.key]) {
      if (e.key === "ArrowLeft") {
        // first function will be the changing of yoshi's avatar\

        this.changeAvatar("left");
        this.movement();

        // we need to find out how to make the background move positions
      } else if (e.key === "ArrowRight") {
        this.changeAvatar("right");
      } else if (!e.key) {
        console.log("I run");
      } else {
        console.log("I jump");
      }
    }
  };

  changeAvatar = direction => {
    let elem = document.getElementById("char");
    if (direction == "right") {
      elem.classList.remove("flip");
    } else {
      elem.classList.add("flip");
    }
    let length = this.state.character.length;
    console.log(this.state.character);

    if (this.state.index >= length - 1) {
      this.setState({ index: 1 });
    }
    this.setState({
      index: this.state.index + 1
    });
  };

  movement = () => {
    document.getElementById("char").classList.add("classname");
  };
  handleKeyDown(event) {
    console.log(event.key);
    console.log("i Run");
  }
  render() {
    const { column } = this.props;
    let style = {
      background: `url(${this.state.character[this.state.index]})`,
      gridColumn: column
    };
    return <div id="char" className="character" style={style}></div>;
  }
}
