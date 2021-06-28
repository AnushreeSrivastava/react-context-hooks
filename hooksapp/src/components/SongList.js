import React, { Component, useState, useReducer, useContext } from 'react'
import uuid from 'uuid/v1';
import NewSong from './NewSong';


const SongList = () => {
    //useState function returns 2 values, 1.the value/data itself 
    //2. a funciton to change/edit the value
    //we use erray destructuring to save those values(songs and setsongs)

    const [songs, setSongs] = useState([
        { title: "This wild drakness", id: 1 },
        { title: "Memory gospel", id: 2 },
        { title: "Senorita", id: 3 }
    ]);

    const addSong = (title) => {
        //this function will completely replace the value to set.so we need to send
        //the prev value(use spread op to spread all the values in the array)
        // as well as the new aditional vaue 
        setSongs([...songs, { title: title, id: uuid() }]);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song =>
                    <li key={song.id}>{song.title}</li>
                )}
            </ul>
            <NewSong addSong={addSong} />
        </div>
    );
}

export default SongList;