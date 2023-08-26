import {Routes,Route,Navigate} from 'react-router-dom'
import Login from '../login/pages/Login'
import Singup from '../signup/pages/SignUp'

function AppRouter() {
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/singup' element={<Singup/>}/>
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )
}

export default AppRouter