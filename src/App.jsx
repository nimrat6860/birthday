import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Journey from "./components/Journey";
import BackgroundMusic from "./components/backgroundmusic";
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Main/>}/>
        <Route path = "/journey" element={<Journey/>}/>   
      </Routes>
      <BackgroundMusic/>
    </Router>
  );
}

export default App;
