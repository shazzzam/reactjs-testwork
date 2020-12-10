import { LOADER_SHOW, LOADER_HIDE, LoaderActionTypes } from './loaderTypes';

const initialState = false;

export const loaderReducer = (
  state = initialState,
  action: LoaderActionTypes
) => {
  switch (action.type) {
    case LOADER_SHOW:
      return true;
    case LOADER_HIDE:
      return false;
    default:
      return state;
  }
};
