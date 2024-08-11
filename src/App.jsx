import { Header } from 'components';
import Home from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { getUserInfo } from './service';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async pos => {
      const crd = pos.coords;
      const data = await getUserInfo(crd);
      console.log(data);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
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
