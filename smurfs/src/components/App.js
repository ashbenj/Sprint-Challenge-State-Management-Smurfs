import React, { useState, useEffect } from 'react';
import './App.css';
// eslint-disable-next-line
import { Route } from 'react-router-dom';
import { SmurfContext } from '../contexts/SmurfContext.js';
import axios from 'axios';

//componets
import SmurfsC from './SmurfsC.js';
import MainForm from './MainForm.js';

function App() {
	const [smurf, setSmurf] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(response => {
				// console.log(response.data)
				setSmurf(response.data);
			})
			.catch(err => {
				console.log('error in smurf axios');
			});
	}, []);

	console.log('in App.js', smurf);

	return (
		<div className='App'>
			<SmurfContext.Provider value={{ smurf }}>
				<h1>SMURFS!</h1>

				<SmurfsC />
				<MainForm />
			</SmurfContext.Provider>
		</div>
	);
}

export default App;
