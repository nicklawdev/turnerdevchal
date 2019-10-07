import { GET_TITLES, SEARCH_TITLES, TITLES_LOADING } from './types'
import axios from 'axios';

export const getTitles = () => dispatch => {
    dispatch(titlesLoading());
    axios
        .get('/api/titles')
        .then(res =>
            dispatch({
                type: GET_TITLES,
                payload: res.data
            })
        )
}

export const searchTitles = (titleName) => dispatch => {
    dispatch(titlesLoading());
    axios
        .get(`/api/titles/${titleName}`)
        .then(res =>
            dispatch({
                type: SEARCH_TITLES,
                payload: res.data
            })
        )
}

export const titlesLoading = () => {
    return {
        type: TITLES_LOADING
    }
}