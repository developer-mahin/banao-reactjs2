import React from 'react';
import { GoLocation } from "react-icons/go"
import { GrClose } from "react-icons/gr"
import { BiErrorCircle } from "react-icons/bi"
import { AiTwotoneLike } from "react-icons/ai"

const RightSideBar = () => {
    return (
        <div className='ms-4 ps-4'>
            <form className='position-relative'>
                <div className='position-absolute location-icon'>
                    <GoLocation className='' />
                </div>
                <input type="text" name="" placeholder='Enter your location' className='w-100 border-0 border-bottom py-2 search-input px-4' id="" />
                <div className='position-absolute end-0 location-icon'>
                    <GrClose />
                </div>
            </form>
            <div className='d-flex gap-1 mt-4'>
                <BiErrorCircle className='text-secondary w-5 fs-5 mt-1' />
                <p className='text-secondary text-sm'>Your location will help us serve better and extend a personalised experience.</p>
            </div>

            <div className='d-flex align-items-center gap-1 my-5'>
                <div>
                    <AiTwotoneLike className='fs-5 text-secondary' />
                </div>
                <div>
                    <p className='text-uppercase m-0'>REcommended Groups</p>
                </div>
            </div>

            <div>
                <div className='d-flex align-items-center justify-content-between my-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src="https://i.ibb.co/DD07JKD/Rectangle-6.png" width={50} height={50} className="img-fluid object-fit-cover" alt="" />
                        <span className='fw-medium'>Leisure</span>
                    </div>
                    <div>
                        <button className='btn bg-secondary bg-opacity-25 rounded-pill px-3 fw-medium'>Follow</button>
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-between my-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src="https://i.ibb.co/bd8DkMv/Rectangle-6-1.png" width={50} height={50} className="img-fluid object-fit-cover" alt="" />
                        <span className='fw-medium'>Activism</span>
                    </div>
                    <div>
                        <button className='btn bg-secondary bg-opacity-25 rounded-pill px-3 fw-medium'>Follow</button>
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-between my-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src="https://i.ibb.co/Rv8f4Xw/Rectangle-6-2.png" width={50} height={50} className="img-fluid object-fit-cover" alt="" />
                        <span className='fw-medium'>MBA</span>
                    </div>
                    <div>
                        <button className='btn bg-secondary bg-opacity-25 rounded-pill px-3 fw-medium'>Follow</button>
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-between my-4'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src="https://i.ibb.co/hF6rp9q/Rectangle-6-3.png" width={50} height={50} className="img-fluid object-fit-cover" alt="" />
                        <span className='fw-medium'>Philosophy</span>
                    </div>
                    <div>
                        <button className='btn bg-secondary bg-opacity-25 rounded-pill px-3 fw-medium'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='text-end pt-4'>
                <span className='text-primary text-sm'>See More...</span>
            </div>

        </div>
    );
};

export default RightSideBar;