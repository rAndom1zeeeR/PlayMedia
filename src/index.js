import React from 'react'
import ReactDOM from 'react-dom/client'
import AudioForm from './components/AudioForm'
import AudioPlayer from './components/AudioPlayer'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
	<React.StrictMode>
		<AudioForm />
		<AudioPlayer />
	</React.StrictMode>
)
