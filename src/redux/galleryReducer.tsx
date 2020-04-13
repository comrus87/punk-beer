import {BeerType} from './types/types';
import {beersApi} from './../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';

const SET_BEERS = 'gallery/SET_BEERS';
const SET_CURRENT_PAGE = 'gallery/SET_CURRENT_PAGE';
const SET_SEARCH_MODE = 'gallery/SET_SEARCH_MODE';

let initialState = {
  beers: [] as Array<BeerType>,
  totalBeers: 325,
  pageSize: 20,
  portialSize: 5,
  currentPage: 1,
  isSearchMode: false
}

type InitialStateType = typeof initialState;

const galleryReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_BEERS:
      return {
        ...state,
        beers: [...action.beers]
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_SEARCH_MODE:
      return {
        ...state,
        isSearchMode: action.mode
      }


    default:
      return state;
  }
}

type SetBeersType = {
  type: typeof SET_BEERS,
  beers: Array<BeerType>
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}

type ToggleSearchModeType = {
  type: typeof SET_SEARCH_MODE,
  mode: boolean
}

type ActionTypes = SetBeersType | SetCurrentPageType | ToggleSearchModeType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setBeers = (beers: Array<BeerType>): SetBeersType => ({type: SET_BEERS, beers});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleSearchMode = (mode: boolean): ToggleSearchModeType => ({type: SET_SEARCH_MODE, mode});

export const getBeers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
  let data = await beersApi.getBeers(page, pageSize);
    dispatch(setBeers(data));
    dispatch(toggleSearchMode(false));
};

export const getBeersSearch = (value: string): ThunkType => async (dispatch) => {
  let data = await beersApi.getBeersSearch(value);
    dispatch(setBeers(data));
    dispatch(toggleSearchMode(true));
}

export default galleryReducer