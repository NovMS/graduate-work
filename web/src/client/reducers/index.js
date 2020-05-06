import updateSettings from './settings';

const reducer = (state, action) => {
  return {
    settings: updateSettings(state, action)
  };
};

export default reducer;
