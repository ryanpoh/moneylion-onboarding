import React from "react";
import { Header } from "./components/Header";
import { StepContainer } from "./containers/StepContainer";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header />
        <StepContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;
