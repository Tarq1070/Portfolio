import { Col, Row, Progress } from "antd";
import bag from "../../Assets/Icons/bag4.svg";
import paytm from "../../Assets/Icons/paytm.png";
import tick from "../../Assets/Icons/tick.png";
import "./Resume.css";

const KnowledgeList = [
  "Firebase Authentication",
  "Firebase Database",
  "Responsive App development",
  "Responsive Website",
  "SEO Optimize",
  "DevOops",
  "Video Editor ",
  "Logo / Poster design",
  "Logo / Poster design",
  "UI/UX Design",
];
export function Knowledge() {
  return (
    <>
      <Row>
        <Col className="left">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>KNOWLEDGE</h2>
          </Row>
          <br />
          <div className="divider"></div>
          <br />
          {KnowledgeList.map((e) => (
            <Row align={"middle"} className="knowledge">
              <img src={tick} width={18} height={14} />
              <h3 className="knowName">{e}</h3>
            </Row>
          ))}
        </Col>
        <Col className="right">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>LANGUAGE</h2>
          </Row>
          <br />
          <div className="divider"></div>
          <br />
          <Col>
            <h3 className="knowName">ENGLISH</h3>
            <Row justify={"space-between"}>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
            </Row>
          </Col>
          <Col>
            <h3 className="knowName">HINDI / MAGAHI</h3>
            <Row justify={"space-between"}>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
            </Row>
          </Col>
          <Col>
            <h3 className="knowName">BHOJPURI</h3>
            <Row justify={"space-between"}>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle completed"></div>
              <div className="lanCircle "></div>
              <div className="lanCircle "></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
              <div className="lanCircle"></div>
            </Row>
          </Col>
          <br />
          <div className="divider"></div>
          <br />
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>HOBBY</h2>
          </Row>
          <br />
          <div className="divider"></div>
          <br />
          <Row>
            <Col style={{ width: "50%" }}>
              <Row align={"middle"} style={{ gap: "10px" }}>
                <div className="lanCircle completed"></div>
                <h3 className="knowName">Video Game</h3>
              </Row>
            </Col>
            <Col style={{ width: "50%" }}>
              <Row align={"middle"} style={{ gap: "10px" }}>
                <div className="lanCircle completed"></div>
                <h3 className="knowName">Badminton</h3>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col style={{ width: "50%" }}>
              <Row align={"middle"} style={{ gap: "10px" }}>
                <div className="lanCircle completed"></div>
                <h3 className="knowName">New technology</h3>
              </Row>
            </Col>
            <Col style={{ width: "50%" }}>
              <Row align={"middle"} style={{ gap: "10px" }}>
                <div className="lanCircle completed"></div>
                <h3 className="knowName">Coding</h3>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
