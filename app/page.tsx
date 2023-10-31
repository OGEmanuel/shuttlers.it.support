"use client";

import { FormEvent, useCallback, useState } from "react";
import AuthInput from "./components/authInput";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(false);

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  let isValid = email.includes("@shuttlers.ng") && password.length >= 8;

  const toggleVariant = useCallback(() => {
    setVariant((curVar) => (curVar === "Login" ? "Register" : "Login"));
  }, []);

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    if (isValid) {
      isValid = true;
      router.push("/dashboard");
    }

    setEmail("");
    setPassword("");

    if (!isValid) {
      setError(true);
      return;
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmitLogin}
        className="shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] border border-[#EBEBEB] bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lgmax-w-md rounded-xl w-full"
      >
        <h2 className="text-[#060606] text-4xl mb-8 font-semibold">
          {variant === "Login" ? "Sign In" : "Register"}
        </h2>
        <div className="flex flex-col gap-4">
          {variant === "Register" && (
            <AuthInput
              label="Firstname"
              onChange={(e: any) => setFirstname(e.target.value)}
              id="firstname"
              value={firstname}
            />
          )}
          {variant === "Register" && (
            <AuthInput
              label="Lastname"
              onChange={(e: any) => setLastname(e.target.value)}
              id="lastname"
              value={lastname}
            />
          )}
          <AuthInput
            label="Email"
            onChange={(e: any) => setEmail(e.target.value)}
            id="email"
            type="email"
            value={email}
          />
          <AuthInput
            label="Password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            id="password"
            value={password}
          />
          {variant === "Register" && (
            <AuthInput
              label="Re-enter Password"
              onChange={(e: any) => setRePassword(e.target.value)}
              id="re-password"
              value={rePassword}
            />
          )}
          {error && (
            <p className="text-[red] text-sm mb-2.5">
              *Wrong Login Credentials, Please try again with your work mail
              details
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#1FAD32] py-3 text-white rounded-md w-full mt-10 hover-bg-red-700 transition"
        >
          {variant === "Login" ? "Login" : "Sign Up!"}
        </button>
        <p className="text-[#060606] mt-12">
          {variant === "Login"
            ? "Not yet a Superhuman?"
            : "Already a Superhuman?"}
          <span
            onClick={toggleVariant}
            className="text-[#1FAD32] ml-1 hover:underline cursor-pointer"
          >
            {variant === "Login" ? "Create an Account" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
