import { Header } from 'components';
import Home from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBaseCurrency } from 'reduxState/operations';
import { setDefaultCurrency } from 'reduxState/currencysSice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async pos => {
      const crd = pos.coords;
      dispatch(getBaseCurrency(crd));
    };

    function error(err) {
      dispatch(setDefaultCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Header>
  );
};
