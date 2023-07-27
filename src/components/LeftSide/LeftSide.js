import { Button, Col, Row, Space } from "antd";
import "./LeftSide.css";
import { CloudDownloadOutlined, SendOutlined } from "@ant-design/icons";
import youtube from "../../Assets/Icons/yt.svg";
import instagram from "../../Assets/Icons/instagram.svg";
import github from "../../Assets/Icons/github.svg";
import linkedin from "../../Assets/Icons/linkedin.svg";
import linktree from "../../Assets/Icons/linktree.svg";
import fb from "../../Assets/Icons/facebook.svg";

import pic from "../../Assets/Images/pic.jpg";
export function LeftSide() {
  const facebook = "https://www.facebook.com/Nitishroy7033/";
  const github = "https://github.com/MrNitishroy";
  const linkedin = "https://www.linkedin.com/in/mrnitishkumar/";
  const linktree = "https://linktr.ee/nitishroy7033";
  const instagram = "https://www.instagram.com/nitishroy7033/";
  const youtube = "https://www.youtube.com/@flutterhero";
  return (
    <>
      <Col>
        <div className="CoverImage">
          <img src={pic} className="pic" />
        </div>
      </Col>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row className="title" justify={"center"}>
        Ni30 Roy
      </Row>
      <Row className="des" justify={"center"}>
        Full stack developer
      </Row>
      <Row className="socialMedia" justify={"center"}>
        <a href={facebook} target="_blank" className="iconBox">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
              className="icon"
            />
          </svg>
        </a>
        <a href={github} target="_blank" className="iconBox">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
              className="icon"
            />
          </svg>
        </a>
        <a href={instagram} target="_blank" className="iconBox">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.028 0.0012304C11.7577 -0.00156983 12.4874 0.00576429 13.217 0.0232305L13.411 0.0302304C13.635 0.0382304 13.856 0.0482304 14.123 0.0602304C15.187 0.11023 15.913 0.278231 16.55 0.525231C17.21 0.779231 17.766 1.12323 18.322 1.67923C18.8303 2.17884 19.2238 2.78318 19.475 3.45023C19.722 4.08723 19.89 4.81423 19.94 5.87823C19.952 6.14423 19.962 6.36623 19.97 6.59023L19.976 6.78423C19.9937 7.51342 20.0014 8.24283 19.999 8.97223L20 9.71823V11.0282C20.0024 11.758 19.9948 12.4877 19.977 13.2172L19.971 13.4112C19.963 13.6352 19.953 13.8562 19.941 14.1232C19.891 15.1872 19.721 15.9132 19.475 16.5502C19.2246 17.218 18.8311 17.8228 18.322 18.3222C17.8219 18.8306 17.2173 19.224 16.55 19.4752C15.913 19.7222 15.187 19.8902 14.123 19.9402C13.856 19.9522 13.635 19.9622 13.411 19.9702L13.217 19.9762C12.4874 19.994 11.7577 20.0017 11.028 19.9992L10.282 20.0002H8.97297C8.24323 20.0027 7.51349 19.995 6.78397 19.9772L6.58997 19.9712C6.35258 19.9626 6.11524 19.9526 5.87797 19.9412C4.81397 19.8912 4.08797 19.7212 3.44997 19.4752C2.78265 19.2246 2.1782 18.8311 1.67897 18.3222C1.17001 17.8225 0.776191 17.2178 0.524967 16.5502C0.277967 15.9132 0.109967 15.1872 0.0599666 14.1232C0.0488295 13.8859 0.0388294 13.6486 0.0299666 13.4112L0.0249667 13.2172C0.00653033 12.4877 -0.0018039 11.758 -3.33508e-05 11.0282V8.97223C-0.00282432 8.24283 0.0045098 7.51343 0.0219667 6.78423L0.0289667 6.59023C0.0369667 6.36623 0.0469667 6.14423 0.0589667 5.87823C0.108967 4.81323 0.276967 4.08823 0.523967 3.45023C0.775339 2.78285 1.16993 2.17868 1.67997 1.68023C2.17886 1.17098 2.78293 0.776803 3.44997 0.525231C4.08797 0.278231 4.81297 0.11023 5.87797 0.0602304L6.58997 0.0302304L6.78397 0.0252306C7.51315 0.00680338 8.24255 -0.00153085 8.97197 0.000230468L11.028 0.0012304ZM9.99997 5.00123C9.33747 4.99186 8.67972 5.11425 8.06494 5.3613C7.45016 5.60834 6.89061 5.97511 6.41881 6.44029C5.94701 6.90546 5.57237 7.45977 5.31665 8.07099C5.06094 8.68222 4.92926 9.33817 4.92926 10.0007C4.92926 10.6633 5.06094 11.3192 5.31665 11.9305C5.57237 12.5417 5.94701 13.096 6.41881 13.5612C6.89061 14.0264 7.45016 14.3931 8.06494 14.6402C8.67972 14.8872 9.33747 15.0096 9.99997 15.0002C11.326 15.0002 12.5978 14.4734 13.5355 13.5358C14.4732 12.5981 15 11.3263 15 10.0002C15 8.67415 14.4732 7.40238 13.5355 6.4647C12.5978 5.52701 11.326 5.00123 9.99997 5.00123ZM9.99997 7.00123C10.3985 6.99389 10.7944 7.06603 11.1648 7.21344C11.5351 7.36085 11.8723 7.58057 12.1567 7.85978C12.4412 8.13898 12.6671 8.47206 12.8214 8.83957C12.9757 9.20708 13.0552 9.60165 13.0552 10.0002C13.0553 10.3988 12.9759 10.7934 12.8218 11.1609C12.6677 11.5285 12.4418 11.8617 12.1575 12.141C11.8731 12.4203 11.536 12.6401 11.1657 12.7876C10.7954 12.9352 10.3995 13.0074 10.001 13.0002C9.20532 13.0002 8.44226 12.6842 7.87965 12.1216C7.31704 11.5589 7.00097 10.7959 7.00097 10.0002C7.00097 9.20458 7.31704 8.44152 7.87965 7.87891C8.44226 7.3163 9.20532 7.00023 10.001 7.00023L9.99997 7.00123ZM15.25 3.50123C14.9274 3.51414 14.6223 3.65138 14.3986 3.8842C14.1749 4.11702 14.05 4.42736 14.05 4.75023C14.05 5.0731 14.1749 5.38344 14.3986 5.61626C14.6223 5.84908 14.9274 5.98632 15.25 5.99923C15.5815 5.99923 15.8994 5.86753 16.1339 5.63311C16.3683 5.39869 16.5 5.08075 16.5 4.74923C16.5 4.41771 16.3683 4.09977 16.1339 3.86535C15.8994 3.63093 15.5815 3.49923 15.25 3.49923V3.50123Z"
              className="icon"
            />
          </svg>
        </a>
        <a href={linkedin} target="_blank" className="iconBox">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
              className="icon"
            />
          </svg>
        </a>
        <a href={linktree} target="_blank" className="iconBox">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.736 5.853L15.741 1.736L18.066 4.116L13.866 8.121H19.774V11.426H13.837L18.066 15.534L15.741 17.868L10.001 12.099L4.25995 17.868L1.93495 15.543L6.16395 11.435H0.225952V8.121H6.13495L1.93495 4.117L4.25895 1.736L8.26395 5.853V0H11.736V5.853ZM8.26395 16.159H11.736V24H8.26395V16.159Z"
              className="icon"
            />
          </svg>
        </a>
        <a href={youtube} target="_blank" className="iconBox">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
             className="icon"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
             
            />
          </svg>
        </a>
      </Row>

      <Row className="bottomBtn" justify={"space-between"}>
        <Button className="btn">
          Download CV <CloudDownloadOutlined />
        </Button>
        <Button className="btn">
          Contact Me <SendOutlined />
        </Button>
      </Row>
    </>
  );
}
