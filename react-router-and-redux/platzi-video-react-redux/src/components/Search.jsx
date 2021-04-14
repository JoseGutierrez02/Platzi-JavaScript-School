import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome } = props;
  const inputStyle = classNames('search__input', {
    isHome,
  });
  return (
    <section className='search'>
      <h2 className='search__title'>¿Qué quieres ver hoy?</h2>
      <input aria-label='Buscar' className={inputStyle} type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;
