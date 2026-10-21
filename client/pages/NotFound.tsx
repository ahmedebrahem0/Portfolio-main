import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { T, useTranslation } from "@/i18n";

const NotFound = () => {
  const location = useLocation();
  const { locale } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4"><T>Oops! Page not found</T></p>
        <a href={locale === "ar" ? "/ar/" : "/"} className="text-blue-500 hover:text-blue-700 underline">
          <T>Return to Home</T>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
