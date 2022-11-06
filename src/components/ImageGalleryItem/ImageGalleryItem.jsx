import { useState } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggelModal = () => {
    setIsOpenModal(prevIsOpenModal => !prevIsOpenModal);
  };

  return (
    <li className={s.galleryItem} onClick={toggelModal}>
      <img className={s.galerryItemImage} src={webformatURL} alt={tags} />
      {isOpenModal && (
        <Modal clickModal={toggelModal} img={largeImageURL} tags={tags} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
