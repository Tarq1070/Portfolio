import { Col, Row } from "antd";
import "./Education.css";


const acadmicDetails =[

    {
        year:"2020 - Present",
        courseName :"Electronic and communication Engineering (B.TECH).",
        collegeName:"Technocrats institute of technology College, Bhopal",
        description :"I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
        cetificateUrl :"#",
        isActive:true
    },
    {
        year:"2017 - 2020",
        courseName :"Intermediate Education Science ( 12th Class ).",
        collegeName:"Mahaveer College Gaya, Baypass More",
        description :"I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
        cetificateUrl :"#",
        isActive:false
    },
    {
        year:"2015 - 2017",
        courseName :"Matric Education ( 10th Class )",
        collegeName:"High School Bataspur, Bhodhgaya",
        description :"I am currenly persuing my b.tech education from currenly persuing my b.tech education from currenly persuing my b.tech education from ion from tit college Bhopal",
        cetificateUrl :"#",
        isActive:false
    },
];
export function Education(){
    return (
        <>

        <h2>Education </h2>
        <div className="divider"></div>
        <br/>
        <br/>
        {
            acadmicDetails.map((e)=><Col className="educationBox">
            {e.isActive?<div className="AcadmicYear active">{e.year}</div>:<div className="AcadmicYear ">{e.year}</div>}
            <h3 className="CourseName">{e.courseName}</h3>
            <div className="CollegeName">{e.collegeName}</div>
            <p> bhopal</p>
            <a href={e.cetificateUrl}  className="eduBtn">{"CERTIFICATE >"}</a>
            <br/>
            <br/>
        <div className="divider"></div>
        </Col>)
        }

        </>
    )
}