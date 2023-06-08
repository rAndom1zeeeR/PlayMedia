export default function isVideo(string) {
	switch (true) {
		case string.lastIndexOf('.mp4') !== -1:
			return true
		case string.lastIndexOf('.webm') !== -1:
			return true
		case string.lastIndexOf('.ogg') !== -1:
			return true
		default:
			return false
	}
}
