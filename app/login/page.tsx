"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type Props = {
  email: string;
  password: string;
};

export const metadata: Metadata = {
  title: "Login - Netflix Clone",
  description: "Login page",
};

const LoginPage = ({ email, password }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const onSubmit = handleSubmit((data) => console.log(data));

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

      <form
        onSubmit={onSubmit}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-sm font-light text-red-400">
                Please enter a valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-sm font-light text-red-400">
                Your password must contain between 4 and 60 characters
              </p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-red-600 py-3 font-semibold"
        >
          Sign in
        </button>

        <div className="flex space-x-2 items-center">
          <p className="text-gray-400">New to Netflix?</p>
          <button className="text-white hover:underline">Sign up now</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
