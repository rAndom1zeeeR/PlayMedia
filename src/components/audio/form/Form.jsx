export default function Form({ onSubmit, onChange, query, status, message }) {
	return (
		<form className='main__form' action='' method='post' onSubmit={onSubmit}>
			<label className='form__label'>Insert the link</label>
			<input
				type='text'
				className={'form__input ' + status}
				placeholder='https://'
				value={query}
				onChange={onChange}
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
			{message && <div className='form__message'>{message}</div>}
		</form>
	)
}
