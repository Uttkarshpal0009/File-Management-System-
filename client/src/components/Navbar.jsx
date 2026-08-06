import { Link, useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
              <FaCloudUploadAlt className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                Uplo<span className="text-cyan-400">Drive</span>
              </h1>

              <p className="text-xs text-gray-400">
                Secure Cloud Storage
              </p>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center items-center gap-3">

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  Dashboard
                </Link>

                <span className="text-white font-medium">
                  {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;