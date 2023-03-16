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
                <div className='col-md-8 px-lg-0 px-2'>
                    <Outlet></Outlet>
                </div>
                <div className='col-md-4'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;