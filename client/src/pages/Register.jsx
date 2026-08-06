import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post("/auth/register", formData);

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-30 -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="relative w-full max-w-md">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
              <FaUserPlus className="text-white text-4xl" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center text-white">
            Create Account
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Join UploDrive today
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <div>
              <label className="block mb-2 text-gray-300 text-sm">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 text-sm">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 text-sm">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-700"></div>

            <span className="px-3 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <p className="text-center text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;