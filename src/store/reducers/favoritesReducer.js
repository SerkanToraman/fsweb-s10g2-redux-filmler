import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions'
//import movies from '../../data.js'


const initialState = {
  favorites:[],
  displayFavorites:true,
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:   
      return {
        ...state,
        displayFavorites:!state.displayFavorites,
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id===action.payload.id).length===0?[...state.favorites,action.payload]:state.favorites,
      }
    case REMOVE_FAVORITE:
      return {
      ...state,
      favorites: state.favorites.filter(item => (action.payload !== item.id)) 
      }
    default:
      return state;
  }
}