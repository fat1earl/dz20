// Core
import React from "react";
import ReactDOM from "react-dom";

// Components
// import { Button } from "./components/button/Button";
// import { List } from "./components/list/List";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

// const title = 'Hello World';
// const template = `<h1>${title}</h1>`;

// const title = 'Hello World';
// const element = <h1>{title}</h1>; // jsx

// // function Clock() {
// //   let time = new Date().toLocaleTimeString();
// //   const element = (
// //     <div>
// //       <h1>Hello!!! {time}</h1>
// //       <h2>Время: {time}</h2>
// //     </div>
// //   );

// //   ReactDOM.render(element, document.querySelector('#root'));
// // }

// // setInterval(Clock, 1000);

// // "Чистая" функция
// function summ(a, b) {
//   return a + b;
// }

// // "Нчистая" функция
// function dirtySumm(a, b) {
//   a = a + b;

//   return a;
// }

// const data = [
//   { id: 1, content: "Text 1" },
//   { id: 2, content: "Text 2" },
//   { id: 3, content: "Text 3" },
//   { id: 4, content: "Text 4" },
// ];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>

      // <div>
      //   <Header />
      //   <List data={data} />
      // </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
