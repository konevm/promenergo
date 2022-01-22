import * as React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <nav>
        <ul className="footer__menu">
          <li className="menu__element">тел. 8-8772-544802</li>
          <li className="menu__element">
            {" "}
            <a href="mailto:promenergo2008@mail.ru">
              e-mail: promenergo2008@mail.ru
            </a>{" "}
          </li>
          <li className="menu__element">
            адрес: 385000 г.Майкоп ул.Строителей д.7
          </li>
        </ul>
      </nav>
      <span className="creator">Конев Михаил 2022</span>
    </div>
  );
};

export default Footer;
