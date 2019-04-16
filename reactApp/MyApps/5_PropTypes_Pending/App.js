import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
	render(){		
		return(<div>{this.props.a}</div>);
	}
}

App.propTypes = {
   a: PropTypes.number
}

App.defaultProps = {
   a: "abc"
};

export default App;