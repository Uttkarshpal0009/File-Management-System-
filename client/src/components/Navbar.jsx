import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          Auth First
        </Link>

        <div className="flex items-center gap-5">

          {!user ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-indigo-600"
              >
                Dashboard
              </Link>

              <span className="font-semibold">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;