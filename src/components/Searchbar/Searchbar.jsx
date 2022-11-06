import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
function Searchbar({ searchQuery }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    searchQuery(input);
    //  setInput("");
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          onChange={e => setInput(e.target.value)}
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  searchQuery: PropTypes.func.isRequired,
};

export default Searchbar;
