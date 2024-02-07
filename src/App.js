import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    <Router>
        
          <Header />
          <main className='py-3'>
            
            <Container>
              <Routes>
                <Route path='/' element={<Homescreen />} exact/>
                <Route path='/product/:id' element={<ProductScreen />} exact/>
                <Route path='/cart' element={<CartScreen/>}  />
                <Route path='/shipping' element={<ShippingScreen/>}  />

              </Routes>
              
              </Container>
            
          </main>
            <Footer />
    </Router>
  );
}

export default App;
