import React, {Component} from 'react';
import './app.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            millisecs: 0
        }
    }

    // Lifecycle hook - this runs before the component is rendered on the application
    componentWillMount(){
        this.getMilliSeconds(this.props.deadline);
        this.getTimeUntil(this.props.deadline);
    }

    // Lifecycle hook - Runs after the componenet is completely rendered on the application
    componentDidMount(){
        setInterval(
            () => this.getMilliSeconds(this.props.deadline), 80
        );

        setInterval(
            () => this.getTimeUntil(this.props.deadline), 1000
        );
    }

    leadingZero(num){
        return num < 10 ? '0' + num : num;
    }

    leadingZeroForMillisecs(num){
        return num < 100 ? '0' + num : num;
    }

    getMilliSeconds(deadline){
        const time = Date.parse(deadline) - Date.now();
        if(time > 0){
            const millisecs = (time % 1000);
            this.setState({millisecs:millisecs});
        }
        else{
            this.setState({millisecs:0});
        }
    }

    getTimeUntil(deadline){
        //const time = Date.parse(deadline) - Date.parse(new Date());
        const time = Date.parse(deadline) - Date.now();
        if(time > 0){
            const seconds = Math.floor((time/1000) % 60);
            const minutes = Math.floor((time/1000/60) % 60);
            const hours = Math.floor(time/(1000*60*60) % 24);
            const days = Math.floor(time/(1000*60*60*24));
            this.setState({days, hours, minutes, seconds});
        }
        else{
            this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});
        }
    }

    render(){
        return (
            <div>
                <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                <div className="Clock-seconds"> {this.leadingZero(this.state.seconds)} seconds</div>
                <div className="Clock-milliseconds"> {this.leadingZeroForMillisecs(this.state.millisecs)} milliseconds</div>
            </div>
        )
    }
}

export default Clock;