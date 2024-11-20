import React from "react";
import "./SignUp.css";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="signUp">
        <SignUp path="/sign-up" signInUrl="/sing-in" />
    </div>
  );
};

export default SignUpPage;