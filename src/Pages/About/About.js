import { Col, Row, Carousel } from "antd";
import "./About.css";
import html from "../../Assets/Icons/email.svg";

import ui from '../../Assets/Icons/ui.png';
import figma from '../../Assets/Icons/figma.png';
import android from '../../Assets/Icons/android.png';
import webhook from '../../Assets/Icons/webhook.png';
import blender from '../../Assets/Icons/blender.png';
import react from "../../Assets/Icons/react.png";
import youtube from "../../Assets/Icons/youtube.png";
import pic2 from "../../Assets/Icons/pix (2).png";
import pic3 from "../../Assets/Icons/pix (3).png";
export function AboutPage() {
  return (
    <>
      <Row justify={"space-between"} align={"middle"}><h2>About Me</h2><p>10:20 PM</p></Row>
      <div className="divider"></div>
      <p>
        <strong>
          Hello! I’m <span className="green">Nitish Kumar 👋</span>.
        </strong>
        <br />
        Back-end & Frond-end developer from Bihar, India. I have rich experience
        in <span className="green">Web Development</span> using React and{" "}
        <span className="green">App Development</span> using Flutter, also I am
        a <span className="green">Backend developer Using C# dotnet</span>. I
        love❤️ to play video games as well as physical games.
      </p>

      <br />
      <h2>My Services</h2>
      <div className="divider"></div>
      <Row justify={"space-between"}>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={react} width={35} />
          </div>
          <h3>Front End </h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={android} width={35} />
          </div>
          <h3>Android (frontend - backend)</h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
      </Row>
      <div className="divider"></div>
      <Row justify={"space-between"}>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={webhook} width={35} />
          </div>
          <h3>Back End</h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={ui} width={35} />
          </div>
          <h3>UI/UX Designer</h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
      </Row>
      <div className="divider"></div>
      <Row justify={"space-between"}>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={blender} width={35} />
          </div>
          <h3>3D Modeling</h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
        <Col className="skillDiv">
          <div className="skillLogo">
            <img src={youtube} width={35} />
          </div>
          <h3>Content Creator</h3>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </Col>
      </Row>
      <br />
      <h2>Testmonial</h2>
      <div className="divider"></div>
      <Carousel autoplay>
        <div className="userReview">
          <img src={pic3} width={80} className="photo" />
          <h3 className="name">Vikash kumar</h3>

          <q className="review">
            "Modern and mobile-ready website that will help vern and
            mobile-ready website that will help you reach all of your
            marketing."
          </q>
        </div>{" "}
        <div className="userReview">
          <img src={pic3} width={80} className="photo" />
          <h3 className="name">Vikash kumar</h3>

          <q className="review">
            "Modern and mobile-ready website that will help vern and
            mobile-ready website that will help you reach all of your
            marketing."
          </q>
        </div>{" "}
        <div className="userReview">
          <img src={pic3} width={80} className="photo" />
          <h3 className="name">Vikash kumar</h3>

          <q className="review">
            "Modern and mobile-ready website that will help vern and
            mobile-ready website that will help you reach all of your
            marketing."
          </q>
        </div>
      </Carousel>
      <br />
      <h2>Personal info</h2>
      <div className="divider"></div>
      <br />
      <Row justify={"space-between"}>
        <Col className="leftBox">
          <p>
           Full Name : <span className="boldLable">Nitish Kumar</span>{" "}
          </p>
          <p>
            Father's Name :{" "}
            <span className="boldLable">Mr. Surendra Prasad</span>{" "}
          </p>
          <p>
           Height : <span className="boldLable">5"5'</span>{" "}
          </p>
          <p>
           Natinality : <span className="boldLable">Indian</span>{" "}
          </p>
          <p>
            Pramanet Address : <span className="boldLable"><br/>Vill : Gannu Bigha, P.O : Rasalpur, <br/>P.S : Chakand, Gaya, Bihar 823003  </span>{" "}
          </p>
          <p>
            Email id : <span className="boldLable">Nitishr833@gmail.com</span>{" "}
          </p>
        </Col>
        <Col className="rightBox">
          <p>
            Date of birth : <span className="boldLable">12 - Aug - 2002</span>{" "}
          </p>
          <p>
            Mother's Name : <span className="boldLable">Late Rekha Devi</span>{" "}
          </p>
          <p>
           Weight : <span className="boldLable">50 Kgs</span>{" "}
          </p>
          <p>
           Status : <span className="boldLable">Single</span>{" "}
          </p>
          <p>
            Present Address : <span className="boldLable"><br/>Gopal Nagar, Piplani, Anand Nagar, Bhopal, MadhyaPradesh 462022</span>{" "}
          </p>
          <p>
            Phone number : <span className="boldLable">+917033161175</span>{" "}
          </p>
        </Col>
      </Row>
      <br/>
      <br/>
    </>
  );
}
