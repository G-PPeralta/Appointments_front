import Modal from "react-modal";
import { StyledButton } from "./styles";
import { InputFields } from "../InputFields/InputFields"

Modal.setAppElement("#root");

export const EditModal = ({ isModalOpen, onClose, onUpdate }) => {
  return (
    <Modal isOpen={isModalOpen}>
      <StyledButton onClick={() => onClose()}>Close</StyledButton>
      <InputFields onSubmit={(appt) => onUpdate(appt)} />
    </Modal>
  );
};
