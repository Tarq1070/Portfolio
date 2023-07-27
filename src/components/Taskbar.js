import "./TaskbarStyle.css";
import about from "../Assets/Icons/person.svg";
import education from "../Assets/Icons/education.svg";
import experience from "../Assets/Icons/bag4.svg";
import project from "../Assets/Icons/project.svg";
import resume from "../Assets/Icons/resume.svg";
import contact from "../Assets/Icons/contact.svg";
import { Link } from "react-router-dom";

function Taskbar() {
  return (
    <>
      <div className="Taskbar">
        <img className="taskIcon" src={about} alt="About"/>
        <img className="taskIcon" src={education} />
        <img className="taskIcon" src={experience} />
        <img className="taskIcon" src={resume} />
        <img className="taskIcon" src={project} />
        <img className="taskIcon" src={contact} />
      </div>
    </>
  );
}
export default Taskbar;
