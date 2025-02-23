import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Left Section */}
      <div className="hidden md:flex md:w-2/5 bg-blue-600 p-12 flex-col justify-between relative clip-path-left">
        <div className="text-white text-4xl font-bold">BASE</div>
        <div className="flex gap-4 text-white">
          <Github className="w-8 h-8" />
          <Twitter className="w-8 h-8" />
          <Linkedin className="w-8 h-8" />
          <MessageSquare className="w-8 h-8" />
        </div>
      </div>

      {/* Right Section with Slanted Edge */}
      <div className="flex-1 flex items-center justify-center p-8 relative bg-white clip-path-right">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-600 mb-8">Sign in to your account</p>

          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white p-2 rounded-lg border hover:bg-gray-50">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google"
                className="h-4 object-contain"
              />
              <span className="text-sm text-gray-600">Sign in with Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white p-2 rounded-lg border hover:bg-gray-50">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                alt="Apple"
                className="h-4 object-contain"
              />
              <span className="text-sm text-gray-600">Sign in with Apple</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-lg border bg-gray-50"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-lg border bg-gray-50"
                placeholder="••••••••"
                required
              />
            </div>

            <a href="#" className="text-blue-600 text-sm block mb-4">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600">
              Register here
            </a>
          </p>
        </div>
      </div>

      <style>
        {`
        .clip-path-left {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }

        .clip-path-right {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
        `}
      </style>
    </div>
  );
};

export default Login;
