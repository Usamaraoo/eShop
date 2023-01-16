import './App.css'
import ProductsPage from './components/ProductsPage'
import Nabvar from './Layouts/Nabvar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'

function App() {
    return (
        <div className='w-4/5 m-auto '>
            <Router>
            <Nabvar />
                <Routes>
                    <Route path='/' element={<ProductsPage />} />
                    <Route path='/:slug' element={<ProductDetail />} />
                    <Route path='/addProduct' element={<AddProduct />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
