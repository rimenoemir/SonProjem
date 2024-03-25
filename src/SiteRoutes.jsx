import React from "react";
import Anasayfa from "./pages/Anasayfa";
import Subeler from "./pages/Subeler";
import { Routes, Route } from "react-router-dom";
import SayfaYok from "./pages/SayfaYok";

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/subeler" element={<Subeler />} />
        <Route path="*" element={<SayfaYok />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
