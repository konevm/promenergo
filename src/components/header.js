import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <div className="header__name">{siteTitle}</div>
      <nav>
        <Link
          to="/"
          activeStyle={{
            backgroundColor: "white",
          }}
        >
          Главная
        </Link>
        <Link
          to="/about"
          activeStyle={{
            backgroundColor: "white",
          }}
        >
          О нас
        </Link>
        <Link
          to="/contacts"
          activeStyle={{
            backgroundColor: "white",
          }}
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};

export default Header;
