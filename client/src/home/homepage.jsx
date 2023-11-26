import React, { useEffect } from 'react';
import Navbars from './navbar';
import ProductList from '../component/productList';
import { useSelector } from 'react-redux';
import authServices from '../services/auth.service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {
  const history = useHistory();
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    if (authServices.getCurrentUser()) history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className='App'>
      <Navbars />
      <ProductList />
    </div>
  );
}
export default HomePage;
