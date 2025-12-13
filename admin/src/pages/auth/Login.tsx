import { Link } from "react-router";
import { LoginForm } from "@/forms";

const Login = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Welcome Back
      </h1>

      <LoginForm />
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-indigo-500 hover:text-indigo-400 transition duration-150"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
