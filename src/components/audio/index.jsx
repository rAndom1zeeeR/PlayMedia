import { StrictMode, useState } from 'react'
import Form from './form/Form'
import Player from './player/Player'
import BackButton from '../BackButton'
import isUrl from './form/isUrl'
import isEmpty from './form/isEmpty'
import isVideo from './form/isVideo'
import setHistoryQuery from './form/setHistoryQuery'

export default function Audio() {
	const [showBack, setShowBack] = useState(false)
	const [showForm, setShowForm] = useState(true)
	const [showPlayer, setShowPlayer] = useState(false)

	function handleBackButton() {
		setShowBack(false)
		setShowForm(true)
		setShowPlayer(false)
	}

	const [query, setQuery] = useState('')
	const [status, setStatus] = useState('')
	const [message, setMessage] = useState('')
	const [showVideo, setShowVideo] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()

		if (isEmpty(query)) {
			setStatus('is-empty')
			setMessage('Empty request')
			return false
		}

		if (isUrl(query)) {
			setStatus('is-success')
			setMessage('Success URL')

			setHistoryQuery(query)

			handleAudioUrl()

			if (isVideo(query)) {
				handleVideoUrl()
			}
		} else {
			setStatus('is-error')
			setMessage('Error URL')
		}

		return false
	}

	function handleChange(event) {
		setQuery(event.target.value)
	}

	function handleAudioUrl() {
		setShowBack(true)
		setShowForm(false)
		setShowPlayer(true)
		setShowVideo(false)
	}

	function handleVideoUrl() {
		setShowVideo(true)
	}

	return (
		<StrictMode>
			{showBack && <BackButton onShow={handleBackButton} />}
			{showForm && (
				<Form
					onSubmit={handleSubmit}
					onChange={handleChange}
					query={query}
					message={message}
					status={status}
					setQuery={setQuery}
				/>
			)}
			{showPlayer && <Player query={query} showVideo={showVideo} />}
		</StrictMode>
	)
}
