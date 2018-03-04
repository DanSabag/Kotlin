import SongCard from '../SongCard/SongCard.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBody from './AppBody.js'

const muiTheme = getMuiTheme({
    "raisedButton": {
        "disabledColor": "#424242"
    },
    "toggle": {
        "thumbOnColor": "rgba(85, 139, 47, 0.91)",
        "thumbOffColor": "rgba(229, 57, 53, 0.8)",
        "trackOnColor": "rgba(197, 225, 165, 0.15)",
        "trackOffColor": "rgba(239, 154, 154, 0.16)",
        "trackDisabledColor": "rgba(255, 255, 255, 0.2)",
        "thumbDisabledColor": "rgba(117, 117, 117, 0.39)"
    },
    "snackbar": {
        "backgroundColor": "rgba(255, 255, 255, 0.54)",
        "actionColor": "#263238"
    },
    "table": {
        "backgroundColor": "rgba(255, 255, 255, 0.54)"
    },
    "tableFooter": {
        "textColor": "#37474f"
    },
    "tableHeaderColumn": {
        "textColor": "#212121"
    },
    "tableRow": {
        "stripeColor": "#757575",
        "selectedColor": "rgba(0, 0, 0, 0.54)",
        "borderColor": "rgba(0, 0, 0, 0.12)",
        "textColor": "rgba(0, 0, 0, 0.81)"
    },
    "timePicker": {
        "accentColor": "#9e9e9e",
        "headerColor": "rgba(255, 255, 255, 0.54)",
        "clockCircleColor": "rgba(255, 255, 255, 0.54)",
        "color": "rgba(255, 255, 255, 0.54)",
        "textColor": "rgba(255, 255, 255, 0.54)",
        "selectTextColor": "#ffffff"
    },
    "palette": {
        "primary1Color": "#424242",
        "primary2Color": "#d7ccc8",
        "primary3Color": "rgba(255, 255, 255, 0.54)",
        "accent1Color": "rgba(244, 67, 54, 0.85)",
        "accent2Color": "#424242",
        "accent3Color": "#b0bec5",
        "alternateTextColor": "rgba(0, 0, 0, 0.54)",
        "textColor": "rgba(255, 255, 255, 0.54)",
        "canvasColor": "rgba(0, 0, 0, 0.26)",
        "borderColor": "rgba(255, 255, 255, 0.54)"
    },
    "flatButton": {
        "color": "#757575"
    },
    "chip": {
        "backgroundColor": "rgba(224, 224, 224, 0.26)"
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBody />
            </MuiThemeProvider>
            
        );
    }
}

export default App