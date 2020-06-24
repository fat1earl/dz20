import React from "react";

import "./header.scss";

const style = {
  padding: "40px 8px",
  // borderRadius: '4px',
  // fontSize: '17px',
  // border: '1px solid #999',
  // color: '#999',
};

export class Header extends React.Component {
  render() {
    return (
      <header style={style}>
        <ul>
          <li>
            <a href="#" noopener="true">
              Главная
            </a>
          </li>
          <li>
            <a href="#" noopener="true">
              Услуги
            </a>
          </li>
          <li>
            <a href="#" noopener="true">
              О нас
            </a>
          </li>
          <li>
            <a href="#" noopener="true">
              Контакты
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
