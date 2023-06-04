import { Component, createRef } from 'react'
import './AudioPlayer.css'

export default class AudioPlayer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			timer: ''
		}

		this.playerButton = createRef()
		this.playerAudio = createRef()
		this.playerTimer = createRef()
		this.playerTimeline = createRef()

		this.handleAudio = this.handleAudio.bind(this)
		this.handlePlayerButton = this.handlePlayerButton.bind(this)
		this.handleTimelinePosition = this.handleTimelinePosition.bind(this)
		this.handleTimer = this.handleTimer.bind(this)
	}

	async handleAudio() {
		try {
			await this.playerAudio.current.play()
			this.playerButton.current.classList.add('is-playing')
		} catch (err) {
			this.playerButton.current.classList.remove('is-playing')
		}
	}

	handlePlayerButton() {
		if (this.playerAudio.current.paused) {
			this.handleAudio()
		} else {
			this.playerAudio.current.pause()
			this.playerButton.current.classList.remove('is-playing')
		}
	}

	handleTimelinePosition() {
		const object = this.playerAudio.current
		const percentagePosition = parseInt((object.currentTime / object.duration) * 100)
		this.playerTimeline.current.style.backgroundSize = `${percentagePosition}% 100%`
		this.playerTimeline.current.value = percentagePosition
		console.log('object', object)
		console.log('percentagePosition', object.currentTime)
		console.log('duration', object.duration)
		console.log('duration1', this.playerTimeline.current)
		console.log('duration2', this.playerTimeline.current.value)
	}

	onTimeUpdate() {
		this.playerAudio.current.ontimeupdate = event => {
			console.log('event2', event)
			console.log('this2', this)
			this.handleTimer()
			this.handleTimelinePosition()
		}
	}

	onLoadedMetadata(timeline, player) {
		player.onloadedmetadata = () => {
			timeline.value = '0'
			timeline.max = '100'
		}
	}

	handleTimer() {
		console.log('handleTimer', this.playerAudio.current)
		let seconds = parseInt(this.playerAudio.current.currentTime + 1)
		let minutes = parseInt(this.playerAudio.current.currentTime / 60)
		let hours = parseInt(minutes / 60)
		minutes = minutes < 10 ? '0' + minutes : minutes
		seconds = seconds < 10 ? '0' + seconds : seconds
		hours = hours > 0 ? hours + ':' : ''
		let timeFormated = hours + minutes + ':' + seconds

		this.setState({ timer: timeFormated })
		return timeFormated
	}

	componentDidMount() {
		console.log('componentDidMount1', this)
		this.onTimeUpdate(this.playerAudio.current, this.handleTimelinePosition)
		this.onLoadedMetadata(this.playerTimeline.current, this.playerAudio.current)
	}

	render() {
		return (
			<div className='player'>
				<audio className='player__audio' preload='auto' ref={this.playerAudio}>
					<source src='https://ts01.flac.pw/mp3/13085.mp3' type='audio/mp3' />
					Your browser does not support the audio element.
				</audio>

				<div
					className='player__play'
					ref={this.playerButton}
					onClick={this.handlePlayerButton}></div>

				<input
					className='player__timeline'
					type='range'
					min='0'
					max='100'
					ref={this.playerTimeline}
				/>

				<div className='player__timer' ref={this.playerTimer}>
					{this.state.timer || '00:00'}
				</div>

				<input className='player__volume' type='range' min='0' max='10' />
			</div>
		)
	}
}
