import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import FormGroup from "../components/common/FormGroup";
import FormRow from "../components/common/FormRow";
import HeadingProfile from "../components/common/HeadingProfile";
import { IconEyeToggle } from "../components/icons";
import { Input } from "../components/input";
import { Label } from "../components/label";
import useToggle from "../hooks/useToggle";

const ProfilePage = () => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const { control } = useForm();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();
  const {
    value: showPasswordConfirm,
    handleToggleValue: handleTogglePasswordfirm,
  } = useToggle();
  return (
    <Fragment>
      <div className="bg-white rounded-xl px-[130px] py-[50px]">
        <h1 className="text-text1 font-bold text-2xl">Account Information</h1>
        <p className="text-text3 text-sm mb-[55px]">
          Update your account information
        </p>
        <HeadingProfile>Personal Information</HeadingProfile>
        <div className="mb-[45px]"></div>
        <FormRow>
          <FormGroup>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              name="first_name"
              control={control}
              value="Mahfuzul Islam"
            ></Input>
          </FormGroup>{" "}
          <FormGroup>
            <Label htmlFor="last_name">Last</Label>
            <Input
              type="text"
              name="last_name"
              control={control}
              value="Nabil"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Date of Birth</Label>
            <DatePicker
              onChange={setDateOfBirth}
              value={dateOfBirth}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              type="tel"
              name="mobile"
              control={control}
              value="+123 456 7890"
              pattern="[0-9]{10}"
            ></Input>
          </FormGroup>
        </FormRow>
        <div className="mb-[55px]"></div>
        <HeadingProfile>Credentials</HeadingProfile>
        <div className="mb-[45px]"></div>
        <FormRow>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              control={control}
              value="hellouihut@gmail.com"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="password">New Password </Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              control={control}
              name="password"
            >
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Confirm Password </Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              control={control}
              name="password"
            >
              <IconEyeToggle
                open={showPasswordConfirm}
                onClick={handleTogglePasswordfirm}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
        </FormRow>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
