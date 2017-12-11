import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	if( action.error ) action.type = 'ERROR';

	switch(action.type){
		case FETCH_WEATHER: 
			return [ action.payload.data, ...state ];			
		case 'ERROR':
			return state;
	}

	return state;
}