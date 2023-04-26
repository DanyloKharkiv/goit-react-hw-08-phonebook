import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layouts/Layout';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/PhoneBook/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/goit-react-hw-08-phonebook/register" element={
            <RestrictedRoute redirectTo="/goit-react-hw-08-phonebook/phonebook" component={<Register />} />
          } />
          <Route path="/goit-react-hw-08-phonebook/login" element={
            <RestrictedRoute redirectTo="/goit-react-hw-08-phonebook/phonebook" component={<Login />} />
          } />
          <Route path="/goit-react-hw-08-phonebook/phonebook" element={
            <PrivateRoute redirectTo="/goit-react-hw-08-phonebook/login" component={<Contacts />} />
          } />
      </Route>
    </Routes>
  );
};