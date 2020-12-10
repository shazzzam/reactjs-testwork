export const LOADER_SHOW = 'LOADER_SHOW';
export const LOADER_HIDE = 'LOADER_HIDE';

interface LoaderShowAction {
  type: typeof LOADER_SHOW;
}

interface LoaderHideAction {
  type: typeof LOADER_HIDE;
}

export type LoaderActionTypes = LoaderHideAction | LoaderShowAction;
