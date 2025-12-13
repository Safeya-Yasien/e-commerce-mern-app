import { SignupForm } from "@/forms";
import { Link } from "react-router";

const Signup = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-2 text-center">
        Create account
      </h1>
      <p className="text-gray-400 text-sm mb-6 text-center">
        Start building your journey
      </p>

      <SignupForm />
      <p className="text-sm text-gray-400 mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-indigo-500 font-semibold hover:text-indigo-400"
        >
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Signup;
