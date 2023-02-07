import './App.css'
import ProductsPage from './components/ProductsPage'
import Nabvar from './Layouts/Nabvar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'
import Cart from './components/Cart'
import Footer from './Layouts/Footer'

function App() {
    return (
        <div className='md:w-4/5 m-auto   '>
            <Router>
                <Nabvar />
                <Routes>
                    <Route path='/' element={<ProductsPage />} />
                    <Route path='/:slug' element={<ProductDetail />} />
                    <Route path='/addProduct' element={<AddProduct />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
