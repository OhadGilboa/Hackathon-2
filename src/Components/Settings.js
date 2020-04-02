import React, { Component } from 'react';
import Slider from "./Sliders/Slider"
import ModeChanger from "./Sliders/ModeChanger"
import Switches from "./Sliders/mySwitch"
import "../styles/Settings.css";
import { observer } from 'mobx-react';


class Settings extends Component {
    render() {
        return (
            <div>
                <div className="rangeTitle">Range:</div>
                <Slider />
                <div className="vlInSettings"></div>
                <div className="modeTitle">Mode:</div>
                <ModeChanger />
                <div className="vlInSettings"></div>
                <div className="silenceTitle">Silence:</div>
                <Switches />
            </div>
        );
    }
}
export default Settings