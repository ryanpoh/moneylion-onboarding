import React from "react";
import { Header } from "./components/Header";
import { LinearStep } from "./containers/LinearStep";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header />
        <LinearStep />
      </Container>
    </React.Fragment>
  );
}

export default App;
