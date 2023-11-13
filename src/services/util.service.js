import axios from 'axios'

export const utilService = {
    debounce,
    getSongInfo
}
const API_KEY = 'AIzaSyBRKY6ERVlaMGjytOb4wV1GWgyjr8d0tL0'


function debounce(func, timeout = 300) {
	let timer
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}

async function getSongInfo(value) {
	const res = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet%20&videoEmbeddable=true&type=video&key=${API_KEY}&q=${value}`
	)
    const songs = res.data.items
    return songs
    }