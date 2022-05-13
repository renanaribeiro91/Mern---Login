import { Routes, Route, Link } from "react-router-dom";
import { Painel } from "./list";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Painel />} />
    </Routes>
  );
};
