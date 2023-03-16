import React from 'react';
import Articles from './Articles';
import Education from './Education';
import Jobs from './Jobs';
import MeetUp from './MeetUp';


const AllPost = () => {



    return (
        <div>
            <div>
                <Articles></Articles>
            </div>
            <div className='mt-3'>
                <Education></Education>
            </div>
            <div className='mt-3'>
                <MeetUp></MeetUp>
            </div>
            <div className='my-3'>
                <Jobs></Jobs>
            </div>
        </div>
    );
};

export default AllPost;