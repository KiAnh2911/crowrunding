import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "../components/button";
import FormGroup from "../components/common/FormGroup";
import { IconEyeToggle } from "../components/icons";
import { Input } from "../components/input";
import { Label } from "../components/label";
import useToggle from "../hooks/useToggle";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import * as yup from "yup";

const SignInPage = () => {
  const shema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("This is field required"),
    password: yup
      .string()
      .min(8, "Password must be 8 character")
      .required("This is field required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
    mode: "submit",
  });
  const handleSignIn = (values) => {};
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();
  return (
    <LayoutAuthentication heading="Welcome back">
      <p className="mb-6 text-xs font-normal leading-5 text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link to={"/sign-up"} className="font-medium underline text-primary">
          Sign Up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm text-text2 dark:text-white lg:mb-8">
        Or sign in with email
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="text"
            placeholder="example@gmail.com"
            control={control}
            name="email"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            control={control}
            error={errors.password?.message}
            name="password"
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <p className="flex justify-end mb-5 text-sm font-medium text-primary">
          Forgot password
        </p>
        <Button type="submit" className="w-full" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
