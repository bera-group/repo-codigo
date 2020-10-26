import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { AuthContext } from '../../context/AuthContext';

const RouteWithLayout = (props) => {
  //const { authState } = useContext(AuthContext);
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        <Layout>
            <Component {...matchProps} />
        </Layout>
       
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
