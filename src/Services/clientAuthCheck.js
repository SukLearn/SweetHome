import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  // implement additional logic for checking whenever user is logged in
  const isLoggedIn = true;
  return (
    <Route
      {...rest}
      element={
        isLoggedIn ? <Element /> : <Navigate to="/Login" replace={true} />
      }
    />
  );
};

export default PrivateRoute;
