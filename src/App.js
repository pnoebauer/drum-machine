import React from 'react';
import './App.css';

// imported library via CDN
// const marked = window.marked;

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
// const clips = {Q, W, E, A, S, D, Z, X, C};

const sounds = [
	'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
	'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
];

const keysPerRow = 3;

const retrieveSoundName = sound => {
	let retrievedSound = sound.replace(`https://s3.amazonaws.com/freecodecamp/drums/`, '');
	retrievedSound = retrievedSound.replace('.mp3', '');

	return retrievedSound;
};

const CreatePad = (triggerKey, id, handleClick) => {
	return (
		<div
			className='col text-center p-2 drum-pad'
			id={`${triggerKey}-key`}
			onClick={handleClick}
			key={id}
		>
			<div
				className='px-2 m-3 triggerKey'
				id={id}
				style={{padding: '40px', cursor: 'pointer'}}
			>
				{triggerKey}
			</div>
			<audio className='clip' id={triggerKey}>
				<source src={sounds[id]} />
			</audio>
		</div>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeSound: null};
	}

	handleKey = event => {
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

		const audioEl = document.getElementById(event.key.toUpperCase());
		const keyEl = document.getElementById(`${event.key.toUpperCase()}-key`);

		// const keyEl = document.getElementById('0');
		console.log(audioEl, keyEl, 'aud');

		if (audioEl) {
			audioEl.play();

			console.log(keys.indexOf(event.key.toUpperCase()), 'pos');

			const soundIndex = Number(keys.indexOf(event.key.toUpperCase()));
			const fullSoundName = sounds[soundIndex];
			const soundName = retrieveSoundName(fullSoundName);
			console.log(fullSoundName, retrieveSoundName(fullSoundName));

			this.setState({activeSound: soundName});

			keyEl.classList.add('drum-pad-active');
		}
	};

	handleKeyUp = event => {
		console.log(`UP Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

		const keyEl = document.getElementById(`${event.key.toUpperCase()}-key`);

		if (keyEl) {
			keyEl.classList.remove('drum-pad-active');
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKey);
		document.addEventListener('keyup', this.handleKeyUp);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKey);
		document.removeEventListener('keyup', this.handleKeyUp);
	}

	handleClick = e => {
		console.log(e.currentTarget.id, 'cl');
		console.log(e.currentTarget.children[1], e.currentTarget.children[0].id, 'child');

		const soundIndex = e.currentTarget.children[0].id;

		const fullSoundName = sounds[soundIndex];
		const soundName = retrieveSoundName(fullSoundName);
		console.log(fullSoundName, retrieveSoundName(fullSoundName));

		this.setState({activeSound: soundName});
		// const audioEl = document.getElementById(e.currentTarget.id);
		// console.log(audioEl);
		const audioEl = e.currentTarget.children[1];
		audioEl.play();
	};

	render() {
		// console.log(this.state);
		return (
			<div className='container-fluid bg-dark' id='drum-machine'>
				<div className='bg-light mx-auto p-2 mt-5'>
					<div id='display'>{this.state.activeSound ?? '-'}</div>
					<div className='row w-50 mx-auto'>
						{keys.flatMap((triggerKey, index) => {
							const pad = CreatePad(triggerKey, index, this.handleClick);
							// console.log(pad, 'p');

							if (index !== 0 && index % keysPerRow === 0) {
								return [<div className='w-100' key={`space-${index}`}></div>, pad];
							}

							return [pad];
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
