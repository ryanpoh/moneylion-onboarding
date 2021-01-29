import React from "react";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers.")
    .required("First name is a required field."),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers.")
    .required("Last name is a required field."),
  email: yup.string().email().required("Email is a required field."),
});

export const Step1 = (props) => {
  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.handleNext();
    setValues(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          required
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          required
        />

        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <PrimaryButton>Next</PrimaryButton>
        <SecondaryButton onClick={props.handleBack}>Back</SecondaryButton>
      </Form>
    </MainContainer>
  );
};
