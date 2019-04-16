import React from 'react';

class App extends React.Component{
	render(){
		return(<Display count="1" />);
	}
}

class Display extends React.Component{
	constructor(props){
		super(props);
		
		console.log('constructor');
	}
	
	static getDerivedStateFromProps(){
		console.log('static getDerivedStateFromProps');
	}
	
	render(){
		console.log('render');
		return(<div>Count = {this.props.count}</div>);
	}
	
	componentWillMount(){
		console.log('componentWillMount');
	}
	
	componentDidMount(){
		console.log('componentDidMount');
	}
	
	/*
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps');
	}
	
	shouldComponentUpdate(){
		console.log('shouldComponentUpdate');
	}
	
	componentWillUpdate(){
		console.log('componentWillUpdate');
	}
	
	componentDidUpdate(){
		console.log('componentDidUpdate');
	}
	
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}
	*/
}

export default App;