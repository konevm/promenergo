import * as React from "react";
import "./index.sass";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Главная" />
      <main>
        <div className="main__wrapper">
          <div style={{ display: "grid", marginBottom: "10px" }}>
            <StaticImage
              style={{
                gridArea: "1/1",
                height: "100vh",
              }}
              layout="fullWidth"
              // aspectRatio={3 / 1}
              alt=""
              src="../images/electricity-gb52516f1a_1920.jpg"
              formats={["auto", "webp", "avif"]}
            />
            <div
              className="title__wrapper"
              style={{
                gridArea: "1/1",
                position: "relative",
                display: "grid",
              }}
            >
              <div className="title__text" style={{ paddingRight: "50px" }}>
                <h1 className="main__title">
                  Вам нужно проложить кабель? Провести линию на несколько
                  километров? Поставить столбы освещения?
                </h1>
                <p>
                  Мы вам поможем! <br />
                  <br />
                  ООО "ПРОМЭНЕРГО" производит любые виды электромонтажных работ
                  от лампочки до подстанции.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", marginBottom: "10px" }}>
            <StaticImage
              style={{
                gridArea: "1/1",
                height: "100px",
              }}
              layout="fullWidth"
              // aspectRatio={3 / 1}
              alt=""
              src="../images/electricity-gb52516f1a_1920.jpg"
              formats={["auto", "webp", "avif"]}
            />
            <div
              className="element__wrapper"
              style={{
                gridArea: "1/1",
                position: "relative",
                display: "grid",
                background:
                  "linear-gradient(90deg, rgba(44,117,255,0) 0%, rgba(255,255,255,0) 27%, rgba(255,255,255,1) 80%)",
              }}
            >
              <div className="element__text" style={{ paddingRight: "50px" }}>
                <p>Наружные работы на линиях электропередач</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
