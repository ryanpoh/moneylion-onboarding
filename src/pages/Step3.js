import React from "react";
import { useForm } from "react-hook-form";
import { useData } from "../DataContext";
import { MainContainer } from "../components/MainContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "../components/Form";
import Checkbox from "@material-ui/core/Checkbox";
import { yupResolver } from "@hookform/resolvers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as yup from "yup";
import Box from "@material-ui/core/Box";

const schema = yup.object().shape({
  agreemen1: yup.boolean(),
  agreemen2: yup.boolean(),
});

export const Step3 = (props) => {
  const { data, setValues } = useData();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      agreement1: data.agreement1,
      agreement2: data.agreement2,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const agreement1 = watch("agreement1");
  const agreement2 = watch("agreement2");

  const onSubmit = async (data) => {
    setValues(data);
    props.handleReset();
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box m={2} pt={3}>
          <Typography variant="h5" gutterBottom>
            Terms of Agreement 1
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            color="textSecondary"
            paragraph
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                defaultValue={data.agreement1}
                defaultChecked={data.agreement1}
                color="primary"
                inputRef={register}
                name="agreement1"
              />
            }
            label="Do you agree?"
          />
        </Box>
        <Box m={2} pt={3}>
          <Typography variant="h5" gutterBottom>
            Terms of Agreement 2
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            color="textSecondary"
            paragraph
          >
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat."
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                defaultValue={data.agreement2}
                defaultChecked={data.agreement2}
                color="secondary"
                inputRef={register}
                name="agreement2"
              />
            }
            label="Do you agree?"
          />
        </Box>
        <PrimaryButton disabled={!agreement1 || !agreement2}>
          Submit
        </PrimaryButton>
        <SecondaryButton onClick={props.handleBack}>Back</SecondaryButton>
      </Form>
    </MainContainer>
  );
};
