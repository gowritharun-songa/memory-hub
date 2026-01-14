import { Routes, Route } from "react-router";

import Home from './pages/Home';
import Create from "./pages/Create";
import Detail from "./pages/Detail"

function App() {
  return(


    <div className="relative h-full w-full">
    <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/memory/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;