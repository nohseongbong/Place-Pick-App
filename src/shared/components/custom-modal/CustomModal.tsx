import Modal, {ModalProps} from 'react-native-modal';

const CustomModal = (props: any) => {
  return (
    <Modal animationOut="fadeOut" animationIn="fadeIn" {...props}>
      {props.children}
    </Modal>
  );
};

export default CustomModal;
