import { GET_TITLES, SEARCH_TITLES, TITLES_LOADING } from '../actions/types'

const initialState = {
    titles: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TITLES:
            return {
                ...state,
                titles: action.payload,
                loading: false
                
            }
        case SEARCH_TITLES:
                console.log(action.payload);
            return {
                ...state,
                titles: action.payload
            }
        case TITLES_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}
