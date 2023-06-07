export default function BackButton({ onShow }) {
	return (
		<div className='main__back' onClick={onShow}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='16'
				fill='none'
				viewBox='0 0 40 36'>
				<path
					fill='#1B191C'
					fillRule='evenodd'
					d='M39.72 18.694a1 1 0 0 0 0-1.388L23.72.722l-.695-.72-1.439 1.389.694.72L36.646 17H0v2h36.646L22.28 33.89l-.694.72 1.44 1.388.694-.72 16-16.584Z'
					clipRule='evenodd'
				/>
			</svg>
			<span>Back</span>
		</div>
	)
}
