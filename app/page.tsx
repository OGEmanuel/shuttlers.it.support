"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputWithLabel } from "./components/input";
import CustomButton from "./components/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [rePasswordValue, setRePasswordValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [firstnameValue, setFirstnameValue] = useState<string>("");
  const [lastnameValue, setLastnameValue] = useState<string>("");

  const router = useRouter();

  let isValid =
    emailValue.includes("@shuttlers.ng") && passwordValue.length >= 5;

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(`Email: ${emailValue}, Password: ${passwordValue}`);

    if (isValid) {
      isValid = true;
      router.push("/dashboard");
      setLoading(false);
    }

    setEmailValue("");
    setPasswordValue("");

    if (!isValid) {
      setLoading(false);
      setError(true);
      return;
    }
  };

  return (
    <main className="w-max mx-auto mt-10">
      <Tabs
        defaultValue="login"
        className="w-[400px] rounded-xl py-10 shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] px-10"
      >
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="py-10">
          <form
            onSubmit={handleSubmitLogin}
            action=""
            className="flex flex-col gap-5 mb-5"
          >
            <InputWithLabel
              type="email"
              className="rounded-2xl"
              label="Email"
              onSetInputValue={setEmailValue}
              inputValue={emailValue}
            />
            <InputWithLabel
              className="rounded-2xl"
              label="Password"
              type="password"
              onSetInputValue={setPasswordValue}
              inputValue={passwordValue}
            />
            <CustomButton>{loading ? "Loading..." : "Login"}</CustomButton>
          </form>
          {error && (
            <p className="text-[red] text-sm mb-2.5">
              *Wrong Login Credentials, Please Try again!
            </p>
          )}
          <p>New user? Switch to the signup tab!</p>
        </TabsContent>
        <TabsContent value="signup" className="py-10">
          <form action="" className="flex flex-col gap-5 mb-5">
            <InputWithLabel
              type="text"
              className="rounded-2xl"
              label="Firstname"
              onSetInputValue={setFirstnameValue}
              inputValue={firstnameValue}
            />
            <InputWithLabel
              type="text"
              className="rounded-2xl"
              label="Lastname"
              onSetInputValue={setLastnameValue}
              inputValue={lastnameValue}
            />
            <InputWithLabel
              type="email"
              className="rounded-2xl"
              label="Email"
              onSetInputValue={setEmailValue}
              inputValue={emailValue}
            />
            <InputWithLabel
              type="password"
              className="rounded-2xl"
              label="Password"
              onSetInputValue={setPasswordValue}
              inputValue={passwordValue}
            />
            <InputWithLabel
              type="password"
              className="rounded-2xl"
              label="Re-enter Password"
              onSetInputValue={setRePasswordValue}
              inputValue={rePasswordValue}
            />

            <CustomButton>Sign Up!</CustomButton>
          </form>
          <p>Already signedup? Switch to the login tab!</p>
        </TabsContent>
      </Tabs>
    </main>
  );
}
