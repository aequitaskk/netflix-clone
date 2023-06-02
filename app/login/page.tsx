"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Input from "@/components/Input";

type Props = {};

export const metadata: Metadata = {
  title: "Login - Netflix Clone",
  description: "Login page",
};

const Auth = (props: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/images/loginbg.jpg"
        alt="login-bg"
        fill
        className="object-cover -z-10 hidden opacity-60 sm:inline"
      />
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Netflix Logo"
          width={150}
          height={150}
          className="object-contain absolute top-4 left-4 md:left-10 md:top-6"
        />
      </Link>

      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === "login" ? "Sign In" : "Register"}
          </h2>
          <div className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                id="name"
                type="text"
                label="Username"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            )}
            <Input
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            {variant === "login" ? "Login" : "Sign up"}
          </button>

          <p className="text-neutral-500 mt-12">
            {variant === "login"
              ? "First time using Netflix?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
