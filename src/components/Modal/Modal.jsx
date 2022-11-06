import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modal = document.querySelector('#modal');
function Modal({ clickModal, img, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = e => {
    if (e.code === 'Escape') {
      clickModal();
      return;
    }
    if (e.target !== e.currentTarget) {
      clickModal();
      return;
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img src={img} alt={tags} />
      </div>
    </div>,
    modal
  );
}

Modal.propTypes = {
  clickModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default Modal;
