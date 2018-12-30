import React, { Component } from 'react';

class App extends Component {
	regex = /^\d{11}$/;
	regex1 = /\d/;
	regex2 = /^[\w@-]{3,6}$/;
	regex3 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
	state = {
		val: '',
		err: false
	};

	// handleRegex = e => {
	// 	if (this.regex1.test(e.key)) {
	// 		console.log('1');
	// 		return true;
	// 	} else {
	// 		console.log('2');
	// 		e.preventDefault();
	// 	}
	// };

	handleState = e => {
		if (this.regex3.test(e.target.value)) {
			this.setState({ err: true });
			this.setState({ val: e.target.value });
		} else {
			this.setState({ val: e.target.value });
			this.setState({ err: false });
		}
	};

	render() {
		return (
			<div className="app">
				<input autoFocus type="text" onKeyDown={this.handleRegex} onChange={this.handleState} />
				<h1 style={this.state.err ? { color: 'green' } : { color: 'red' }}>{this.state.val}</h1>
				<p>{this.state.err ? 'True' : 'False'}</p>
			</div>
		);
	}
}

export default App;
