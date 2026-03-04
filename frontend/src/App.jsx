import { Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import ErrorBoundary from "./components/ErrorBoundary";
import PageLoader from "./components/PageLoader";
import './App.css'


const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const online = () => {
      setIsOnline(true);
      toast.dismiss("network");
      toast.success("Back online");
    };

    const offline = () => {
      setIsOnline(false);
      toast.error("You are offline", {
        id: "network",
        duration: Infinity,
      });
    };

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">

        {!isOnline && (
          <div className="bg-red-500 text-white text-center py-2 text-sm">
            You are offline
          </div>
        )}

        <Suspense fallback={<PageLoader />}>
          <Header />
        </Suspense>

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />

        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;