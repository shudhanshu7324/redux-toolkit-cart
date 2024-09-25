import './main.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </Provider>
)
