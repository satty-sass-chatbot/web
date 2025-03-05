import { useEffect } from "react";

import Title from "../../ui/src/components/title/index.tsx";
import Button from "../../ui/src/components/button/index.tsx";

function Dashboard() {
  useEffect(() => {
    // redirect to login page if not authenticated
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-4xl font-bold text-center mt-20">Dashboard</h1>
      </div>
      <Title>Dashboard Componentes</Title>
      <Button />
    </>
  );
}

export default Dashboard;
