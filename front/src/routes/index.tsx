import { Routes, Route, Link } from "react-router-dom";
import {
  Painel,
  Home,
  ProductsDetails,
  DashBoard,
  ProductsCadastrar,
  ProductsEdit,
  ProductsList,
  UserCadastrar,
  UserEdit,
  UserList,
} from "./list";

export const RoutesApp = () => {
  return (
    <Routes>
      {/* Rota Cliente */}
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductsDetails />} />

      {/* Rota Admin */}
      <Route path="/admin" element={<DashBoard />} />

      {/* <Route path="/" element={<Painel />} /> */}

      <Route path="/admin/products" element={<ProductsList />} />
      <Route path="/admin/products/cadastrar" element={<ProductsCadastrar />} />
      <Route path="/admin/products/editar/:id" element={<ProductsEdit />} />

      <Route path="/admin/users" element={<UserList />} />
      <Route path="/admin/users/cadastrar" element={<UserCadastrar />} />
      <Route path="/admin/products/editar/:id" element={<UserEdit />} />
    </Routes>
  );
};
