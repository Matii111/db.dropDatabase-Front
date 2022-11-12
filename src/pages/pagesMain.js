import React from 'react';
import '../styles.css';
import Home from './homePage';
import {Link,Route, Routes} from 'react-router-dom'
import UserPage from './userPage';

function PagesMain() {
    return(
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}/>        
            <Route path='/user' element={<UserPage/>}/>                
        </Routes>
    </div>
    );
}

export default PagesMain;


