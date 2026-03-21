import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import SchoolLogin from "./pages/SchoolLogin.tsx";
import SchoolDashboard from "./pages/SchoolDashboard.tsx";
import "./index.css";

const path = window.location.pathname;

// Route: /school-login
if (path === "/school-login") {
  createRoot(document.getElementById("root")!).render(<SchoolLogin />);
}
// Route: /dashboard/:schoolId
else if (path.startsWith("/dashboard/")) {
  const schoolId = path.replace("/dashboard/", "").toUpperCase();
  createRoot(document.getElementById("root")!).render(
    <SchoolDashboard schoolId={schoolId} />
  );
}
// Default: main app
else {
  createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
