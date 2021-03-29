import React from 'react';

import UserInfo from '../components/Dashboard/userInfo';
import Navbar from '../components/navbar/Navbar';
import SideNav from '../components/navbar/SideNav';


export default function Invoice() {

    return (
        
        <div style={{width: '100%', height: '100%', backgroundColor: '#F0F8FF'}}>
            <Navbar/>
            <SideNav/>
            <UserInfo/>
            

        </div>
    )
}
