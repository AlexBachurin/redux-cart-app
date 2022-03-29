import { useEffect } from 'react';
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from './features/cart/cartSlice';
function App() {
  const { isLoading } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  //fetch cart items once app loads
  useEffect(() => {
    dispatch(getCartItems())
    //eslint-disable-next-line
  }, [])

  //loading
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
