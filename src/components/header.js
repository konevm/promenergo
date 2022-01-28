import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <div className="header__name">{siteTitle}</div>
      <nav>
        <Link
          to="/"
          activeStyle={{
            textDecoration: "underline",
            textDecorationColor: "#4538b8",
          }}
        >
          Главная
        </Link>
        <Link
          to="/about"
          activeStyle={{
            textDecoration: "underline",
            textDecorationColor: "#4538b8",
          }}
        >
          О нас
        </Link>
        <Link
          to="/contacts"
          activeStyle={{
            textDecoration: "underline",
            textDecorationColor: "#4538b8",
          }}
        >
          Контакты
        </Link>
      </nav>
    </div>
  )
}

export default Header
