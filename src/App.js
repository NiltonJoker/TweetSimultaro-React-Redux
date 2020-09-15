import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import Modal from "./components/Modal"
// Redux
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
      </Container>
      <Modal>
        Formulario para añadir nuevo tweet
      </Modal>
    </Provider>
  );
}

export default App;
