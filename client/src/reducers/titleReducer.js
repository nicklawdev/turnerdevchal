import { GET_TITLE, GET_TITLES, SEARCH_TITLES, TITLES_LOADING } from '../actions/types'

const initialState = {
    titles: [],
    loading: false,
    titleDetail: { 
        Storylines: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TITLES:
            return {
                ...state,
                titles: action.payload,
                loading: false
            }
        case GET_TITLE:
            return {
                ...state,
                titleDetail: action.payload,
                loading: false                      
            }
        case SEARCH_TITLES:
            return {
                ...state,
                titles: action.payload,
                loading: false
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
