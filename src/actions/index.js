import axios from 'axios';

const API_KEY = 'c3a05b00455f62d7ccde57a29480a5ba';
// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}