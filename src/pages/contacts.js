import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const titleStyle = {
  padding: "15px 0px",
  textAlign: "center",
  textTransform: "uppercase",
  fontFamily: "Roboto, sans-serif",
  fontSize: "2rem",
  color: "#1d2e70",
  fontWeight: "700",
}

const Contacts = () => {
  return (
    <Layout>
      <Seo title="Контакты" />
      <div className="contacts">
        <h1 style={titleStyle}>Где нас найти</h1>
        <div
          className="contacts__wrapper"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            className="map"
            style={{
              width: "30vw",
              height: "50vh",
              border: "1px solid #2c75ff",
              borderRadius: "7px",
              overflow: "hidden",
              marginLeft: "40px",
            }}
          >
            <YMaps>
              <Map
                defaultState={{
                  center: [44.63339541491029, 40.119509352612],
                  zoom: 17,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
                width={"30vw"}
                height={"50vh"}
              >
                <Placemark
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[44.63339541491029, 40.119509352612]}
                  properties={{
                    balloonContentBody: "Первый этаж справа",
                  }}
                />
              </Map>
            </YMaps>
          </div>
          <div
            className="contacts__main"
            style={{
              fontFamily: "Roboto",
              margin: "0",
              padding: "20px",
              fontSize: "2rem",
              display: "flex",
              flexDirection: "row",
              maxWidth: "65vw",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                width: "60%",
              }}
            >
              <li style={{ paddingBottom: "60px" }}>Адрес:</li>
              <li style={{ paddingBottom: "20px" }}>Телефон приемной:</li>
              <li style={{ paddingBottom: "20px" }}>Телефон бухгалтерии:</li>
              <li style={{ paddingBottom: "20px" }}>E-mail:</li>
            </ul>

            <ul
              style={{
                listStyleType: "none",
                textAlign: "right",
                textDecoration: "underline",
                textDecorationColor: "#2c75ff",
              }}
            >
              <li style={{ paddingBottom: "20px" }}>
                385000 р.Адыгея г.Майкоп ул.Строителей 7
              </li>
              <li style={{ paddingBottom: "20px" }}>8-8772-544802</li>
              <li style={{ paddingBottom: "20px" }}>8-8772-540740</li>
              <li style={{ paddingBottom: "20px" }}>promenergo2008@mail.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts
