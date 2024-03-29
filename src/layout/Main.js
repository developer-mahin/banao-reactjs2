import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import MenuBar from '../Components/MenuBar/MenuBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <MenuBar></MenuBar>
            <div className='row container-two mx-auto'>
                <div className='col-lg-8 px-lg-0 px-2'>
                    <Outlet></Outlet>
                </div>
                <div className='col-lg-4 d-lg-block d-none'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;