/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const LOAD_BOARDS = 'boilerplate/App/LOAD_BOARDS';
export const LOAD_BOARDS_SUCCESS = 'boilerplate/App/LOAD_BOARDS_SUCCESS';
export const LOAD_BOARDS_ERROR = 'boilerplate/App/LOAD_BOARDS_ERROR';


// error 추가하기

export const STORE_BOARD = 'boilerplate/App/STORE_BOARD';
export const STORE_BOARD_SUCCESS = 'boilerplate/App/STORE_BOARD_SUCCESS';
export const STORE_BOARD_ERROR = 'boilerplate/App/STORE_BOARD_ERROR';
