import {BeerType} from './types/types';
import {beersApi} from './../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';

const SET_BEERS = 'gallery/SET_BEERS';
const SET_CURRENT_PAGE = 'gallery/SET_CURRENT_PAGE';

let initialState = {
  beers: [] as Array<BeerType>,
  totalBeers: 325,
  pageSize: 20,
  portialSize: 5,
  currentPage: 1
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

type ActionTypes = SetBeersType | SetCurrentPageType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setBeers = (beers: Array<BeerType>): SetBeersType => ({type: SET_BEERS, beers});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});

export const getBeers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
  let data = await beersApi.getBeers(page, pageSize);
    dispatch(setBeers(data));
};

export default galleryReducer
