const fetchCountries = 'covid/fetchCountries';

const initialState = [];

const fetchStats = (payload) => ({
  type: fetchCountries,
  payload,
});

const covidReducer = (state = initialState, action = { type: 'action' }) => {
  switch (action.type) {
    case fetchCountries:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export { fetchStats, covidReducer };
