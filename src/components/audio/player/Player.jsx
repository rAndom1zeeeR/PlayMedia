import { StrictMode, useEffect, useRef, useState } from 'react'
import './Player.css'
import Shortcut from './Shortcut'

export default function Player({ query, showVideo }) {
	const [timer, setTimer] = useState('')
	const [volume, setVolume] = useState('')
	const [duration, setDuration] = useState('')
	const [loading, setLoading] = useState(true)
	const [message, setMessage] = useState('')

	const refPlayer = useRef(null)
	const refTimeline = useRef(null)
	const refVolume = useRef(null)
	const refPlay = useRef(null)

	function handlePlayerButton(event) {
		if (refPlayer.current.paused) {
			handleAudio(event)
		} else {
			refPlayer.current.pause()
			event.target.classList.remove('is-playing')
		}
	}

	function handleAudio(event) {
		try {
			refPlayer.current.play()
			event.target.classList.add('is-playing')
		} catch (err) {
			event.target.classList.remove('is-playing')
		}
	}

	function handleTimer(event) {
		try {
			const time = event.target.currentTime
			let seconds = Math.floor(time % 60)
			let minutes = Math.floor(time / 60) % 60
			let hours = Math.floor(minutes / 60)
			minutes = minutes < 10 ? '0' + minutes : minutes
			seconds = seconds < 10 ? '0' + seconds : seconds
			hours = hours > 0 ? hours + ':' : ''
			let timeFormated = hours + minutes + ':' + seconds

			setTimer(timeFormated)
			return timeFormated
		} catch (err) {
			setTimer('00:00')
		}
	}

	function handleSeek(event) {
		// IF Stream
		if (duration === Infinity) return false

		let time = parseInt(event.target.value * duration) / 100
		refPlayer.current.currentTime = time.toFixed(0)
		setTimer(time.toFixed(0))
	}

	function handleVolume(event) {
		refPlayer.current.volume = event.target.value / 100
		setVolume(event.target.value)
		handlelinePosition(event.target.value, event.target.max, event.target)
	}

	function handlelinePosition(current, duration, line) {
		// IF moving back when playing
		if (line === null) return false
		// IF Stream
		if (duration === Infinity) duration = current

		const position = parseInt((current / duration) * 100)
		line.value = position
		line.style.backgroundSize = `${position}% 100%`
	}

	useEffect(() => {
		refPlayer.current.ontimeupdate = event => {
			handleTimer(event)
			handlelinePosition(event.target.currentTime, event.target.duration, refTimeline.current)
		}

		refPlayer.current.onloadedmetadata = event => {
			console.log(event.target.duration)
			setDuration(event.target.duration)
			refPlayer.current.volume = refVolume.current.value / 100
			setVolume(refVolume.current.value)
			handlelinePosition(refVolume.current.value, 100, refVolume.current)
		}

		refPlayer.current.onended = () => {
			refPlay.current.classList.remove('is-playing')
		}

		refPlayer.current.onerror = event => {
			setMessage('Error! Something went wrong. Click Back to enter new link')
			console.log('Error! Something went wrong', event.target)
			event.target.parentElement.style.display = 'none'
		}
	})

	useEffect(() => {
		refPlayer.current.oncanplay = () => {
			setTimeout(() => {
				setLoading(false)
			}, 1000)
			console.log('oncanplay')
		}
	})

	useEffect(() => {
		refPlayer.current.onloadeddata = () => {
			console.log('onloadeddata')
			Shortcut(refPlayer.current, refVolume.current)
		}
	})

	return (
		<StrictMode>
			{message && <div className='error__message'>{message}</div>}

			<div className='player'>
				{loading && <div className='player__preloader'></div>}

				{showVideo ? (
					<video className='player__video' preload='auto' src={query} ref={refPlayer}></video>
				) : (
					<audio className='player__audio' preload='auto' src={query} ref={refPlayer}></audio>
				)}

				<div className='player__controls'>
					<div className='player__play' ref={refPlay} onClick={handlePlayerButton}></div>

					<input
						className='player__timeline'
						type='range'
						defaultValue='0'
						min='0'
						max='100'
						step='1'
						ref={refTimeline}
						onChange={handleSeek}
					/>

					<div className='player__timer'>{timer || '00:00'}</div>

					<input
						className='player__volume'
						type='range'
						min='0'
						max='100'
						step='1'
						defaultValue={volume}
						ref={refVolume}
						onChange={handleVolume}
					/>
				</div>
			</div>
		</StrictMode>
	)
}
