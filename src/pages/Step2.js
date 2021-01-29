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
  birthday: yup.string().required("Birth date is a required field."),
});

export const Step2 = (props) => {
  const { setValues, data } = useData();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      birthday: data.birthday,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
    props.handleNext();
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          label="Birth Date"
          id="birthday"
          type="date"
          name="birthday"
          error={!!errors.email}
          InputLabelProps={{ shrink: true }}
          helperText={errors?.email?.message}
          required
        />
        <PrimaryButton>Next</PrimaryButton>
        <SecondaryButton onClick={props.handleBack}>Back</SecondaryButton>
      </Form>
    </MainContainer>
  );
};
