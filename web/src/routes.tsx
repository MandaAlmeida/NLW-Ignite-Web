import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Game } from './Pages/Game';
import { Home } from './Pages/Home';


export function Nav(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Game' element={<Game />} />
                </Routes>
            </Router>
        </div>
    )
}