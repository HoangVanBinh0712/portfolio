import './App.css';
import HomePage from './component/home-page';
import Layout from './component/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './component/project-detail';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;