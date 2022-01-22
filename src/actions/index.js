import movies from "../reducers";

{
    // type: 'ADD_MOVIES'
}

//action types 
export const ADD_MOVIES = 'ADD_MOVIES';

// action creators
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}