import { Col, Row } from "antd";
import "./Resume.css";
import bag from "../../Assets/Icons/bag4.svg";
import paytm from "../../Assets/Icons/paytm.png";
import gpay from "../../Assets/Icons/gpay.png";

export function Resume() {
  const acadmicDetails = [
    {
      year: "2020 - Present",
      courseName: "Electronic and communication Engineering (B.TECH).",
      collegeName: "Technocrats institute of technology College, Bhopal",
      description:
        "I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
      cetificateUrl: "#",
      isActive: true,
    },
    {
      year: "2017 - 2020",
      courseName: "Intermediate Education Science ( 12th Class ).",
      collegeName: "Mahaveer College Gaya, Baypass More",
      description:
        "I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
      cetificateUrl: "#",
      isActive: false,
    },
    {
      year: "2015 - 2017",
      courseName: "Matric Education ( 10th Class )",
      collegeName: "High School Bataspur, Bhodhgaya",
      description:
        "I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
      cetificateUrl: "#",
      isActive: false,
    },
  ];

  const experianceDetails = [
    {
      year: "2020 - 2021",
      companyLogo: paytm,
      positionName: "Wordpress Developer",
      CompanyName: "Green Justis Network Foundation",
      description:
        "In this company i have made complete website for this orgnaztion ",
      recomndationUrl: "#",
      isActive: false,
    },

    {
      year: "2020 - 2021",
      companyLogo: gpay,
      positionName: "Android Developer With Flutter",
      CompanyName: "Green Justis Network Foundation",
      description:
        "In this company i have made complete website for this orgnaztion ",
      recomndationUrl: "#",
      isActive: false,
    },

    {
      year: "2020 - 2021",
      companyLogo:bag,
      positionName: "Wordpress Developer",
      CompanyName: "Green Justis Network Foundation",
      description:
        "In this company i have made complete website for this orgnaztion ",
      recomndationUrl: "#",
      isActive: false,
    },
  ];
  return (
    <>
      <h2>Resume</h2>
      <div className="divider"></div>
      <br />
      <Row>
        <Col className="left">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>EXPERIENCE</h2>
          </Row>
          <br />
          <div className="divider"></div>
          {experianceDetails.map((e) => (
            <Col className="educationBox">
              {e.isActive ? (
                <div className="AcadmicYear active">{e.year}</div>
              ) : (
                <div className="AcadmicYear ">{e.year}</div>
              )}
              <Row justify={"space-between"}>
                <div>
                  <h3 className="CourseName">{e.positionName}</h3>
                  <div className="CollegeName">{e.CompanyName}</div>
                </div>
                <img src={e.companyLogo} width={50} height={20}/>
              </Row>
              <p> {e.description}</p>
              <a href={e.recomndationUrl} className="eduBtn">
                {"RECOMNDATION >"}
              </a>
              <br />
              <br />
              <div className="divider"></div>
            </Col>
          ))}
        </Col>
        <Col className="right">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>EDUCATION</h2>
          </Row>
          <br />
          <div className="divider"></div>
          {acadmicDetails.map((e) => (
            <Col className="educationBox">
              {e.isActive ? (
                <div className="AcadmicYear active">{e.year}</div>
              ) : (
                <div className="AcadmicYear ">{e.year}</div>
              )}
              <h3 className="CourseName">{e.courseName}</h3>
              <div className="CollegeName">{e.collegeName}</div>
              <p> bhopal</p>
              <a href={e.cetificateUrl} className="eduBtn">
                {"CERTIFICATE >"}
              </a>
              <br />
              <br />
              <div className="divider"></div>
            </Col>
          ))}
        </Col>
      </Row>
      <br/>
      <h2>Skills</h2>
      <div className="divider"></div>

    </>
  );
}
