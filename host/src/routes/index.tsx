import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("../../../auth/src/auth.tsx"));
const Dashboard = lazy(() => import("../../../dashboard/src/dashboard.tsx"));

const ApplicationRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default ApplicationRoutes;
