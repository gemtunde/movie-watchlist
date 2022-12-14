
const AppReducer = (state, action)=> {
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                 watchlist: [action.payload, ...state.watchlist] };
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                //whats not true is filtered out or deleted
                watchlist: state.watchlist.filter(
                    (movie)=>movie.id !== action.payload),
            };
        case 'ADD_MOVIE_TO_WATCHED':
            return {
                ...state,
                     //whats not true is filtered out or deleted
                watchlist: state.watchlist.filter(movie=>movie.id !==action.payload.id),
                watched: [action.payload, ...state.watched],
            };
        case 'REMOVE_MOVIE_FROM_WATCHED':
            return{
                ...state,
                watched: state.watched.filter(movie=>movie.id !== action.payload)
            };
        case 'ADD_MOVIE_BACK_TO_WATCHLIST':
            return{
                ...state,
                watched: state.watched.filter(movie=>movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist]
            }
        default:
            return state;
    }
}

export default AppReducer;