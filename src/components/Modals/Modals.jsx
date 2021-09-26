import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modals = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>{buttonLabel} More Info</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={{ color: 'blue' }}> Greetings From Costa Rica!</ModalHeader>
        <ModalBody style={{ color: 'red' }}>
       Scroll Down to use the search bar and find some movie
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Hide</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;