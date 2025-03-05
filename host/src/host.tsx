import ApplicationRoutes from "./routes";

import { Navbar } from "./components/navbar";

function Host() {
  return (
    <>
      <ApplicationRoutes />
      <Navbar />
      <p className="text-lg font-semibold text-violet-800">Host Application</p>
    </>
  );
}

export default Host;
