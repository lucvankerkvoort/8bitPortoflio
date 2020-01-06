import React from "react";
import {
  Sky,
  Ground,
  Tree,
  TreeReversed,
  Cloud
} from "../Components/Background";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Sky />
        <Ground />
        <Tree />
        <TreeReversed />
        <Cloud />
      </div>
    );
    // I have to create the following components
    // 1. sky
    // 2. land
    // 3. characters
  }
}

export default Home;
