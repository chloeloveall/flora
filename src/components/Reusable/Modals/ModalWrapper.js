import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../../actions/index';

function ModalWrapper({children, size, header}) {
  const dispatch = useDispatch();

  return (
    // set true since the opening is controlled by redux
    <Modal open={true} onClose={() => dispatch(closeModal())} size={size}>
      {/* not compulsory - header only renders if available */}
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  )
}

export default ModalWrapper;