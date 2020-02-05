import React from "react";

export class Sky extends React.Component {
  render() {
    return <div className="sky" />;
  }
}

export class Tree extends React.Component {
  render() {
    const { column } = this.props;
    return <div className="tree" style={column}></div>;
  }
}

export class TreeReversed extends React.Component {
  render() {
    const { column } = this.props;
    return <div className="treeReversed" style={column}></div>;
  }
}

export class Cloud extends React.Component {
  render() {
    const { column } = this.props;
    return <div className="cloud" style={column}></div>;
  }
}

export class Ground extends React.Component {
  render() {
    return (
      <div className="ground">
        <div className="box one"></div>
        <div className="box two"></div>
        <div className="box three"></div>
        <div className="box four"></div>
        <div className="box five"></div>
      </div>
    );
  }
}
