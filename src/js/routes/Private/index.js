import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import hasToken from '@Utils/ValidateToken';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    hasToken()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
