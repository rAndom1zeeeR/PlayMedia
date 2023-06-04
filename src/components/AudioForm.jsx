import { useState, useRef } from 'react'
import './AudioForm.css'

export default function AudioForm() {
	const [value, setValue] = useState('')
	const [message, setMessage] = useState('')
	const input = useRef(null)
	const messageVisibility = useRef(null)

	function handleChange() {
		console.log('handleChange', input.current.value)
		setValue(input.current.value)
		checkInput()
	}

	function checkInput() {
		console.log('checkInput', input.current.value)

		// Clear effects if empty
		if (input.current.value === '') {
			messageVisibility.current.style.display = ''
			setMessage('')
			if (input.current.classList.contains('is-success')) {
				input.current.classList.remove('is-success')
			}
			if (input.current.classList.contains('is-error')) {
				input.current.classList.remove('is-error')
			}
			return false
		}

		// Check if URL http, https
		const isUrl = string => {
			try {
				return Boolean(new URL(string))
			} catch (e) {
				return false
			}
		}

		// Check input
		if (isUrl(input.current.value)) {
			setMessage('Success message here')
			input.current.classList.remove('is-error')
			input.current.classList.add('is-success')
		} else {
			setMessage('Error message here')
			input.current.classList.remove('is-success')
			input.current.classList.add('is-error')
		}

		// Show message
		messageVisibility.current.style.display = 'block'
	}

	return (
		<form className='main__form' action='' method='post'>
			<label className='form__label'>Insert the link</label>
			<input
				className='form__input'
				type='text'
				placeholder='https://'
				ref={input}
				value={value}
				onChange={handleChange}
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
			<div className='form__message' ref={messageVisibility}>
				{message}
			</div>
		</form>
	)
}
