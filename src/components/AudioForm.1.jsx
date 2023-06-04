import React, { Component } from 'react'

export default class AudioForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			input: '',
			status: '',
			message: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
		this.setState({ input: event.target })
		setTimeout(() => {
			this.checkInput(event.target)
		}, 100)
	}

	handleSubmit(event) {
		event.preventDefault()
		// Check empty
		if (this.state.value === '') {
			return false
		}

		console.log('event', event)
		console.log('this', this)

		const data = new FormData(event.target)
		console.log('fromEntries', Object.fromEntries(data.entries()))
	}

	checkInput(event) {
		console.log('checkInput this', this)
		console.log('checkInput event', event)

		// Error message
		const https = 'https://'
		// const http = 'https://'
		const messageError = 'Error message here'
		const messageSuccess = 'Success message here'

		// Check input string format
		console.log('this.state.value', this.state.value)
		console.log('this.state.value.indexOf(https)', this.state.value.indexOf(https))
		if (this.state.value.indexOf(https) === -1) {
			this.setState({ status: 'error' })
			this.setState({ message: messageError })
		} else {
			this.setState({ status: 'success' })
			this.setState({ message: messageSuccess })
		}
		setTimeout(() => {
			this.checkStatus()
		}, 100)
	}

	checkStatus() {
		// Check input status
		console.log('checkInput this.state.status', this.state.status)
		switch (this.state.status) {
			case 'error':
				console.log('state1', this.state)
				this.state.input.classList.remove('is-success')
				this.state.input.classList.add('is-error')
				break
			case 'success':
				console.log('state2', this.state)
				this.state.input.classList.remove('is-error')
				this.state.input.classList.add('is-success')
				break
			default:
				console.log('state3', this.state)
				// this.state.input.classList.remove('is-success')
				// this.state.input.classList.remove('is-error')
				break
		}
	}

	render() {
		return (
			<form className='main__form' action='' method='post' onSubmit={this.handleSubmit}>
				<label className='form__label'>Insert the link</label>
				<input
					className='form__input'
					type='text'
					placeholder='https://'
					value={this.state.value}
					onChange={this.handleChange}
					// onInput={this.handleChange}
				/>
				<button className='form__button' type='submit'>
					<svg xmlns='http://www.w3.org/2000/svg' width='40' height='36' fill='none'>
						<path
							fill='#1B191C'
							fillRule='evenodd'
							d='M39.72 18.694a1 1 0 0 0 0-1.388L23.72.722l-.695-.72-1.439 1.389.694.72L36.646 17H0v2h36.646L22.28 33.89l-.694.72 1.44 1.388.694-.72 16-16.584Z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</form>
		)
	}
}
