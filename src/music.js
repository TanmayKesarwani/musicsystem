// import React, { useState } from 'react';
import data from './data';
import { useState } from "react";


const MusicList = (props) => {
    console.log("jdbbc");
    const{id,like,title,subtitle,media} = props;

    const[visible,setVisible] = useState(false);
    const[totalLike,setTotalLike] = useState(like);
    const[music,setMusic] = useState(data);

    const RemoveItem = (id) => {
        let newMusic = music.filter((music) => music.id !== id);
        setMusic(newMusic);
    }

    return (
        <>
        <article>
            <div>
                <label className='like-text'>{totalLike}</label>
                <button className="like-button" onClick={() => {setTotalLike(totalLike + 1)}}></button>
                <div className="song">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <button className="play">Play</button>
                    <button className="arrow" onClick={() => {setVisible(!visible)}}></button>
                </div>
                if(visible) {
                    <div className="delete">
                        <button className="delete" onClick={() => RemoveItem(id)}>Delete Song</button>
                    </div>
                }
            </div>
        </article>
        </>
    )
}

export default MusicList