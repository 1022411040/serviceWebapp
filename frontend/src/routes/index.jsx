import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// layout
const App = lazy(() => import("../App"));

// main pages
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));

// auth
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

// dashboard
const Dashboard = lazy(() => import("../layout/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const Orders = lazy(() => import("../pages/Orders"));
const Projects = lazy(() => import("../pages/Projects"));

// admin
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const ManageServices = lazy(() => import("../pages/ManageServices"));
const ManageProjects = lazy(() => import("../pages/ManageProjects"));
const ManageUsers = lazy(() => import("../pages/ManageUsers"));

// misc
const NotFound = lazy(() => import("../components/NotFound"));
const ComingSoon = lazy(() => import("../pages/ComingSoon"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/:serviceId", element: <ServiceDetails /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Orders /> },
          { path: "projects", element: <Projects /> },
        ],
      },

      {
        path: "admin",
        children: [
          { path: "", element: <AdminDashboard /> },
          { path: "services", element: <ManageServices /> },
          { path: "projects", element: <ManageProjects /> },
          { path: "users", element: <ManageUsers /> },
        ],
      },

      { path: "coming-soon", element: <ComingSoon /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;