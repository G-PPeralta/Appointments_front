import Modal from 'react-modal';
import { StyledButton } from './styles';
import { InputFields } from '../InputFields/InputFields';

Modal.setAppElement('#root');

export function EditModal({ isModalOpen, onClose, onUpdate, appointment }) {
  return (
    <Modal isOpen={isModalOpen} className="react-modal-content">
      <StyledButton onClick={() => onClose()}>Close</StyledButton>
      <InputFields appointment={appointment} onSubmit={(appt) => onUpdate(appt)} />
    </Modal>
  );
}
