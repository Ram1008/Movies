import React from 'react'
import Styles from './MovieItem.module.css';
import DummyImage from '../assets/Screenshot 2024-03-20 113906.png'
const MovieItem = (props) => {
    const handleRedirect = () =>{
        window.open(props.item.imdb_url, '_blank', 'noopener,noreferrer');
    }
  return (
                <div className={Styles.card}  >
                    <img src={DummyImage} className={Styles.cardImage} alt="..."/>
                        <div className={Styles.cardBody}>
                            <h5 className={Styles.cardTitle}>{props.item.movie}</h5>
                            <h6 className={Styles.cardText}> Rating: <small >{props.item.rating}</small></h6>
                            <div style = {{cursor:"pointer"}} onClick={() => props.handleToggleFavorite(props.item.id)}>
                                {props.favorites.includes(props.item.id) ?  <span>❤️</span>: <span>🖤</span>}
                            </div>
                            <h5 className={Styles.cardText} style = {{cursor:"pointer"}} onClick={handleRedirect}><small >View IMDB</small></h5>
                        </div>
                </div>
  )
}

export default MovieItem;