import {BeerType} from './types/types';
import {beersApi} from './../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';

const SET_BEERS = 'gallery/SET_BEERS';

let initialState = {
  beers: [] as Array<BeerType>
}

type InitialStateType = typeof initialState;

const galleryReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_BEERS:
      return {
        ...state,
        beers: [...action.beers]
      }

    default:
      return state;
  }
}

type SetBeersType = {
  type: typeof SET_BEERS,
  beers: Array<BeerType>
}

type ActionTypes = SetBeersType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setBeers = (beers: Array<BeerType>): SetBeersType => ({type: SET_BEERS, beers});

export const getBeers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
  let data = await beersApi.getBeers(page, pageSize);
    dispatch(setBeers(data));
};

export default galleryReducer
