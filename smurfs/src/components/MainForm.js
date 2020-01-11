import React from 'react';
import axios from 'axios';

export default class MainForm extends React.Component {
	constructor() {
		super();
		this.state = { name: '', age: null, height: '' };
	}

	changeHandler = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();

		const newSmurf = {
			name: this.state.name,
			age: Number(this.state.age),
			height: this.state.height
		};

		console.log(newSmurf);

		axios
			.post('http://localhost:3333/smurfs', newSmurf)
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log('error in post', err);
			});
		window.location.reload();
	};

	render() {
		return (
			<div>
				<h1>Smurf Village</h1>
				<form onSubmit={this.onSubmit}>
					<input
						className='name'
						placeholder='enter Smurf name'
						type='type'
						value={this.state.name}
						name='name'
						onChange={this.changehandler}
					/>
					<input
						className='age'
						placeholder='enter Smurf age'
						type='type'
						value={this.state.age}
						name='name'
						onChange={this.changeHandler}
					/>
					<input
						className='height'
						placeholder='enter Smurf height in cm.'
						type='type'
						value={this.state.height}
						name='height'
						onChange={this.changeHandler}
					/>
					<button type='submit' className='SubmitButton'>
						Join!
					</button>
				</form>
			</div>
		);
	}
}
