import React from "react";
import {
  Sky,
  Ground,
  Tree,
  TreeReversed,
  Cloud
} from "../Components/Background";
import { yoshi, megaMan, metroid, Character } from "../Components/Characters";

class Home extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  handleKey(e) {
    let keys = {
      ArrowRight: true,
      ArrowLeft: true,
      ArrowUp: true
    };
    let element = document.getElementById;
    if (keys[e.key]) {
      if (e.key === "ArrowLeft") {
        console.log("I run left");
      } else if (e.key === "ArrowRight") {
        console.log("I run right");
      } else {
        console.log("I jump");
      }
    }
  }

  spacer(start, end, repetition) {
    let arrColumn = [];

    let startingPoint = start + "/" + end;
    arrColumn.push(startingPoint);
    console.log(arrColumn);

    for (let i = 0; i < repetition; i += 2) {
      start = start + 4;
      end = end + 4;
      let interval = start + "/" + end;

      arrColumn.push(interval);
    }
    return arrColumn;
  }
  render() {
    return (
      <div className="home">
        <Sky />
        <Ground />
        {this.spacer(2, 3, 6).map(interval => {
          let style = {
            gridColumn: interval
          };
          return <Tree column={style} />;
        })}
        {this.spacer(4, 5, 6).map(interval => {
          let style = {
            gridColumn: interval
          };
          return <TreeReversed column={style} />;
        })}
        {this.spacer(3, 5, 12).map(interval => {
          let style = {
            gridColumn: interval
          };
          return <Cloud column={style} />;
        })}
        <Character column="6/7" />
      </div>
    );
    // I have to create the following components
    // 1. sky
    // 2. land
    // 3. characters
  }
}

export default Home;
