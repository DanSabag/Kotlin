import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js'
import SongCard from '../SongCard/SongCard.js'

class App extends React.Component {
    render() {
        const tags = [{name: "rock", url: "andRoll", id: 1}];
        const comments = [
            {username: "test", content: "asdasdasdasd asd sad sad sad sa dsa d", id: 1},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 2},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 3},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 4}
        ];

        return (
            <div>
                <NavBar brand="GarageSound"/>
                <br/>
                <br/>
                <br/>
                <SongCard songName="test" tags={tags} comments={comments}/>
                <SongCard songName="tststa" tags={tags} comments={comments}/>
            </div>
        );
    }
}

export default App;