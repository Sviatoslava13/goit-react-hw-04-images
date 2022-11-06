import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css';
import fetchPixabay from './PixabayAPI.js';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [picture, setPicture] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) return;
    setIsLoading(true);
    fetchPixabay(search, page)
      .then(data => {
        setPicture(prevPicture =>
          page === 1 ? data.hits : [...prevPicture, ...data.hits]
        );
        setTotalPages(Math.ceil(data.totalHits / 12));
      })
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [search, page]);

  const updatePage = () => {
 setPage(page + 1) ;
  };

  const searchQuery = search => {
    setSearch(search);
    setPage(1);
    setPicture([]);
  };

  return (
    <div className={s.container}>
      <Searchbar searchQuery={searchQuery} />
      <ImageGallery picture={picture} />
      {isLoading && <Loader />}
      {picture.length > 0 && totalPages > page && (
        <Button updatePage={updatePage} />
      )}
    </div>
  );
}
