import React from 'react';

class App extends React.Component{
	render(){
		return(			
			<div>
				<Header title="J2EEKART" />
				<Content text="This is sample content" />
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return(<h1>{this.props.title}</h1>);
	}
}

class Content extends React.Component{
	render(){
		return(<p>{this.props.text}</p>);
	}
}

export default App;