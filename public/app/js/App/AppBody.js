import SongCard from '../SongCard/SongCard.js';
import AppBar from 'material-ui/AppBar'

class AppBody extends React.Component {
    render() {
        const tags = [{name: "rock", id: 1}];
        const comments = [
            {username: "test", content: "asdasdasdasd asd sad sad sad sa dsa d", id: 1},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 2},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 3},
            {username: "Dan test", content: "asdasdasdasd asd sad sad sad sa dsa df sdfsd gfds gsd grwe tretgerg erg erg erfg ref wfde sdafg dsg tr efd sdaf sdg dsfgf", id: 4}
        ];

        return (
            <div>
                <AppBar /> 
                <br />
                <br />
                <SongCard songName="test" userName="Dan Sabag" tags={tags} comments={comments}/>
            </div>
        );
    }
}

export default AppBody