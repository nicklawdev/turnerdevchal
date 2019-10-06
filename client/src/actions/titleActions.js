import { GET_TITLES, SEARCH_TITLES, TITLES_LOADING } from './types'
import axios from 'axios';

export const getTitles = () => dispatch => {
    dispatch(titlesLoading());
    const data = axios
        .get('/api/titles')
        .then(res =>
            dispatch({
                type: GET_TITLES,
                payload: data
            })
        )
}

export const searchTitles = (titleName) => {
    return {
        type: SEARCH_TITLES,
        payload: titleName
    }
}

export const titlesLoading = () => {
    return {
        type: TITLES_LOADING
    }
}