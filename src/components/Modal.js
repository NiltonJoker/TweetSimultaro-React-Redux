import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

const Modal = (props) => {
  const { children } = props;

  // Dispatch para ejecutar las acciones
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  // useSelector para acceder a un valor en el store
  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      size="lg"
      centered
      onHide={() => closeModal(false)}
    >
      {children}
    </ModalB>
  );
};

export default Modal;