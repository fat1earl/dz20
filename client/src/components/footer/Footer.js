import React from "react";

import "./footer.scss";

const style = {
  padding: "20px 8px 50px ",
};
export class Footer extends React.Component {
  render() {
    return (
      <footer style={style}>
        <div class="footer_nav">
          <div>
            <h4>О нас</h4>
            <li>
              <a href="#" noopener="true">
                Меню 1
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 2
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 3
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 4
              </a>
            </li>
          </div>
          <div>
            <h4>Услуги</h4>
            <li>
              <a href="#" noopener="true">
                Меню 1
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 2
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 3
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 4
              </a>
            </li>
          </div>
          <div>
            <h4>Лицензии</h4>
            <li>
              <a href="#" noopener="true">
                Меню 1
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 2
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 3
              </a>
            </li>
            <li>
              <a href="#" noopener="true">
                Меню 4
              </a>
            </li>
          </div>
        </div>
      </footer>
      //   <a href="#" className="button" style={style}>
      //     Click
      //   </a>
    );
  }
}
