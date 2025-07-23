import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AlumnisPage from "./Pages/Member/AlumnisPage";
import ProfessorPage from "./Pages/Member/ProfessorPage";
import CurrentMemberPage from "./Pages/Member/CurrentMemberPage";
import LabAchivementPage from "./Pages/Research/LabAchievementPage";
import ProjectPage from "./Pages/Research/ProjectsPage";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/alumni" element={<AlumnisPage />} />
      <Route path="/professors" element={<ProfessorPage />} />
      <Route path="/current-members" element={<CurrentMemberPage />} />
      <Route path="/lab-achievements" element={<LabAchivementPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
