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

  movement = direction => {
    let tree = document.getElementsByClassName("tree");
    let treeReversed = document.getElementsByClassName("treeReversed");
    let cloud = document.getElementsByClassName("cloud");
    let ground = document.getElementsByClassName("ground");
    let arrayOfElements = [tree, treeReversed, cloud];
    let start;
    let end;
    arrayOfElements.map(element => {
      let length = element.length;
      for (let i = 0; i < length; i++) {
        let specificElement = element[i].style.gridColumn;
        let startNum = specificElement[0] + specificElement[1];
        start = parseInt(startNum.trim());
        let endNum =
          specificElement[specificElement.length - 2] +
          specificElement[specificElement.length - 1];
        end = parseInt(endNum.trim());

        console.log(start, end);
        if (direction === "left") {
          element[i].style.gridColumn = `${start + 1} / ${end + 1}`;
        } else if (direction == "right") {
          if (start != 1)
            element[i].style.gridColumn = `${start - 1} / ${end - 1}`;
        }
      }
    });
  };
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
        <Character column="6/7" movement={this.movement} />
      </div>
    );
  }
}

export default Home;
