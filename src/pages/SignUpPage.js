import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "../components/button";
import { CheckBox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { IconEyeToggle } from "../components/icons";
import useToggle from "../hooks/useToggle";

const SignUpPage = () => {
  const shema = yup.object({
    fullname: yup.string().required("This is field required"),
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

  const handleSignUp = (values) => {};
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggle();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal leading-5 text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm text-text2 dark:text-white lg:mb-8">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">FullName *</Label>
          <Input
            type="text"
            placeholder="Jhon Doe"
            control={control}
            name="fullname"
            error={errors.fullname?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            control={control}
            error={errors.email?.message}
            name="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
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

        <CheckBox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
          <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
            I agree to the{" "}
            <span className="underline text-secondary">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy</span>.
          </p>
        </CheckBox>

        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
