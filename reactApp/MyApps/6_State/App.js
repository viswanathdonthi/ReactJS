import React from 'react';

class Clock extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			date : new Date().toLocaleTimeString()
		}
	}
	
	render(){
		return(<div>{this.state.date}</div>);
	}
	
	componentDidMount(){
		this.timer = setInterval(() => this.updateClock(), 1000);
	}
	
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	
	updateClock(){
		this.setState({
		  date: new Date().toLocaleTimeString()
		});
	}
	
}

export default Clock;