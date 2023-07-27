import { AboutPage } from "../../Pages/About/About";
import { Education } from "../../Pages/Education/Education";
import { Resume } from "../../Pages/Resume/Resume";
import "./RightSide.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export function RightSide() {
  return (
    <div className="rghtBox">

<Resume/> 
      {/* <Education/> */}
      {/* <AboutPage/> */}
     {/* <Router>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router> */}
    </div>
  );
}
