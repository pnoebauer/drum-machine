import React from 'react';
import './App.css';

// imported library via CDN
// const marked = window.marked;

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
// const clips = {Q, W, E, A, S, D, Z, X, C};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		// console.log(this.state);
		return (
			<div className='container-fluid bg-dark' id='drum-machine'>
				<div className='bg-light mx-auto p-2 mt-5' id='display'>
					<div className='row w-50 mx-auto'>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='w-100'></div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='w-100'></div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
						<div className='col text-center bg-success p-2'>
							<div className='px-2 m-3 bg-danger' style={{padding: '40px'}}>
								Column
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
