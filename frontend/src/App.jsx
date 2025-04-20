import React, { useContext } from 'react';
import {Route,Routes} from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import { UserDataContext } from './context/UserContext';
import Start from './pages/Start';
import Home from './pages/Home';
import UserProtectedWrap from './pages/UserProtectedWrap';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrap from './pages/CaptainProtectedWrap';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';

const App = ()=>{
    return (
         <div >
            <Routes>
                <Route path='/' element={<Start />}/>
                <Route path='/login' element={<UserLogin />}/>
                <Route path='/riding' element={<Riding />}/>
                <Route path='/signup' element={<UserSignup />}/>
                <Route path='/captain-login' element={<CaptainLogin />}/>
                <Route path='/captain-signup' element={<CaptainSignup />}/>
                <Route path='/home' element={<UserProtectedWrap> <Home/> </UserProtectedWrap>}/>
                <Route path='/user/logout' element={<UserProtectedWrap> <UserLogout/> </UserProtectedWrap>}/>
                <Route path='/captain-home' element={ <CaptainProtectedWrap> <CaptainHome/> </CaptainProtectedWrap> }/>
                <Route path='/captain-logout' element={ <CaptainProtectedWrap> <CaptainLogout/> </CaptainProtectedWrap> }/>
            </Routes>
        </div>
    )
}
export default App;