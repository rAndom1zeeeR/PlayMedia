export default function Shortcut(player, refVolume) {
	window.addEventListener('keydown', function (event) {
		const key = event.keyCode

		switch (key) {
			// P - Play, Pause
			case 80:
				if (player.paused) {
					player.play()
					document.querySelector('.player__play').classList.add('is-playing')
				} else {
					player.pause()
					document.querySelector('.player__play').classList.remove('is-playing')
				}
				break
			// < - volume down
			case 188:
				if (player.volume < 0.1) {
					player.volume = 0
					refVolume.value = player.volume
					return false
				} else {
					player.volume = player.volume - 0.1
					refVolume.value = player.volume * 100
					refVolume.style.backgroundSize = `${player.volume * 100}% 100%`
				}
				break
			// > - volume up
			case 190:
				if (player.volume > 0.9) {
					player.volume = 1
					refVolume.value = player.volume
					return false
				} else {
					player.volume = player.volume + 0.1
					refVolume.value = player.volume * 100
					refVolume.style.backgroundSize = `${player.volume * 100}% 100%`
				}
				break
			// M - mute/unmute volume
			case 77:
				if (player.muted) {
					player.muted = false
					refVolume.value = player.volume * 100
					refVolume.style.backgroundSize = `${player.volume * 100}% 100%`
				} else {
					player.muted = true
					refVolume.value = 0
					refVolume.style.backgroundSize = `0% 100%`
				}
				break
			// { - play slower
			case 219:
				if (player.playbackRate < 0.2) {
					player.playbackRate = 0.1
					return false
				} else {
					player.playbackRate = player.playbackRate - 0.1
				}
				break
			// } - play faster
			case 221:
				if (player.playbackRate > 1.9) {
					player.playbackRate = 2
					return false
				} else {
					player.playbackRate = player.playbackRate + 0.1
				}
				break
			//
			default:
				break
		}
	})
}
