import React from "react";

import "./main.scss";

const style = {
  padding: "4px 8px",
  // borderRadius: '4px',
  // fontSize: '17px',
  // border: '1px solid #999',
  // color: '#999',
};

export class Main extends React.Component {
  render() {
    return (
      <content style={style}>
        <div class="main">
          <h1>Hello REACT!!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </content>

      //   <a href="#" className="button" style={style}>
      //     Click
      //   </a>
    );
  }
}
