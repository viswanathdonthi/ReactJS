import React from 'react';

class App extends React.Component{
	render(){
		return(			
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return(<h1>{this.props.title}</h1>);
	}
}

Header.defaultProps = {
	title : 'J2EEKART'
}

class Content extends React.Component{
	render(){
		return(<p>{this.props.text}</p>);
	}
}

Content.defaultProps = {
	text : "This is sample content"
}

export default App;