
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import AnimatedLogo from "./AnimatedLogo";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/investment-advisory", label: "Investment Advisory" },
    { path: "/corporate-services", label: "Corporate Services" },
    { path: "/about", label: "About Us" },
    { path: "/knowledge", label: "Knowledge Hub" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <AnimatedLogo />
            <span className="text-xl font-semibold text-teal-800">Svastiya Financial Services</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-teal-700 hover:bg-teal-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
