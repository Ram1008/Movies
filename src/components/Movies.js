import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, toggleFavorite, toggleShowFavorite } from '../features/Reducer';
import Styles from './Movies.module.css';
import MovieItem from './MovieItem';

const DataList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const favorites = useSelector((state) => state.data.favorites);
  const showFavorite = useSelector((state) => state.data.showFavorite);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };
  const handleShowAll = () =>{
    dispatch(toggleShowFavorite(false));
  }
  const handleShowFavorite = () =>{
    dispatch(toggleShowFavorite(true));
  }

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded' && showFavorite === false) {
    content = (
        items.map((item) => (
            <MovieItem key= {item.id} item = {item} handleToggleFavorite = {handleToggleFavorite} favorites={favorites}/>
        ))
    );
  }else if(status === 'succeeded' && showFavorite === true && favorites){
    content = (
      favorites.map((id) => {
        const item = items.find(item => item.id === id);
        return <MovieItem key={item.id} item={item} handleToggleFavorite={handleToggleFavorite} favorites={favorites} />;
      })
    );
  }else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className= {Styles.container}>
        <h3 className={Styles.heading}>Movies Flerista</h3>
        <div className={Styles.tabs}>
            <div className={`${Styles.tab} ${!showFavorite ? Styles.borderBottom: null}`} onClick={handleShowAll}>All movies</div>
            <div className={`${Styles.tab} ${showFavorite ? Styles.borderBottom: null}`} onClick={handleShowFavorite}>Favorites</div>
        </div>
        <div className= {Styles.movieContainer}>
            {content}
        </div>
      
      
    </div>
  );
};

export default DataList;
