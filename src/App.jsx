import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ActiveOrders from "./pages/ActiveOrders";
import ArchiveOrders from "./pages/ArchiveOrders";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 pb-10">
      {/* Admin Navigation */}
      <Navbar />

      <Routes>
        {/* Active Orders Page */}
        <Route path="/" element={<ActiveOrders />} />

        {/* Completed Orders Page */}
        <Route path="/archive" element={<ArchiveOrders />} />
      </Routes>
    </div>
  );
};

export default App;
