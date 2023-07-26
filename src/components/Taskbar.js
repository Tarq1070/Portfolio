import "./TaskbarStyle.css"
import win from "../Assets/Icons/win.svg"
import email from "../Assets/Icons/email.svg"
import trash from "../Assets/Icons/trash.svg"
import edge from "../Assets/Icons/edge.svg"
import home from "../Assets/Icons/home.svg"

function Taskbar() {
  return (
    <>
    <div className="Taskbar">
        <img className="taskIcon" src={win} />
        <img className="taskIcon" src={home} />
        <img className="taskIcon" src={email} />
        <img className="taskIcon" src={trash} />
        <img className="taskIcon" src={edge} />
    </div>
    </>
  )
}
export default Taskbar;
