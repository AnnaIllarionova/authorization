import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";
import { AuthPage } from "./pages/auth-page/auth-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
