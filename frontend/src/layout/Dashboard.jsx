import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-[240px_1fr] gap-8">

      {/* Sidebar */}
      <aside className="border rounded-lg p-4 h-fit">

        <h2 className="font-semibold mb-4">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-2 text-sm">

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-black text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-black text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/dashboard/projects"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-black text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Projects
          </NavLink>

        </nav>

      </aside>

      {/* Content */}
      <section className="border rounded-lg p-6">
        <Outlet />
      </section>

    </div>
  );
};

export default Dashboard;