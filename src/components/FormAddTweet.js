import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsActions";
import { addTweetAction } from "../actions/tweetsActions";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const FormAddTweet = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  // Inicialización del dispatch y ejecución del las acciones
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  // Obtener estado de la validación del formulario
  const erroFormValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuidv4(),
        name,
        tweet,
        date: moment(),
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          placeholder="Escribe tu Nombre"
          onChange={(e) => onChange(e)}
          value={formValue.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe lo que quieres tweetear..."
          onChange={(e) => onChange(e)}
          value={formValue.tweet}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar Tweet
      </Button>

      {erroFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
};

export default FormAddTweet;
