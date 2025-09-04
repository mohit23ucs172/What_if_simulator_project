// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Simulation from "./pages/Simulation";
import ShareTimeline from "./pages/ShareTImeline.jsx";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Directly load Simulation as homepage */}
        <Route path="/" element={<Simulation />} />
        <Route path="/share/:id" element={<ShareTimeline />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
