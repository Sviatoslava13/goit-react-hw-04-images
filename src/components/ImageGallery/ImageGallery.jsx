import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({picture}) {
    return (
      <>
        <ul className={s.gallery}>
          {picture.map(
            ({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            )
          )}
        </ul>
       
      </>
    );
  }
ImageGallery.propTypes = {
  picture: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default ImageGallery;
