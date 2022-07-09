import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Components/Navbar';
import Home from '../Components/Home';
import store from '../redux/configureStore';

describe('Render components', () => {
  test('render navbar', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Nav />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render DetailPage', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
