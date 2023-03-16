import React from 'react';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"

const MeetUp = () => {

    return (
        <div className='border rounded'>
            <div>
                <img src="https://i.ibb.co/0qskJK6/Rectangle-5-1.png" className='img-fluid w-100' alt="" />
            </div>
            <div className='px-3'>
                <p className='fw-medium mt-3 text-base'>🗓️ Meetup</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4 className='text-lg'>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                    </div>
                    <div class="dropdown w-10 d-flex justify-content-end">
                        <BiDotsHorizontalRounded className='cursor-pinter fs-4' data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item">Edit</Link></li>
                            <li><Link class="dropdown-item">Report</Link></li>
                            <li><Link class="dropdown-item">Option 3</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <div className='d-flex align-items-center gap-1'>
                        <img src="https://i.ibb.co/yPY15TP/Vector.png" className='img-fluid' alt="" />
                        <span className='fw-medium text-md'>Fri, 12 Oct, 2018</span>
                    </div>
                    <div className='d-flex align-items-center gap-1 fw-medium'>
                        <GrLocation />
                        <span className='text-md'>Ahmedabad, India</span>
                    </div>
                </div>

                <div className='mt-3'>
                    <button className='btn border text-md text-danger fw-medium w-100'>Visit Website</button>
                </div>
            </div>
            <div className='px-3 d-flex align-items-center justify-content-between py-3'>
                <div className='d-flex align-items-center gap-1'>
                    <img width={50} height={50} className="rounded-pill object-fit-cover"
                        src="https://i.ibb.co/chsm9PM/Rectangle-3-2.png" alt="" />
                    <div>
                        <span className='text-md fw-medium'>Ronal Jones</span>
                        <div className='d-lg-none d-block m-0'>
                            <AiOutlineEye />
                            <span className='ms-1 text-md'>1.4k views</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-4'>
                <div className='d-lg-block d-none'>
                        <AiOutlineEye />
                        <span className='ms-2'>1.4k views</span>
                    </div>
                    <div className='d-lg-block d-none'>
                        <button className='btn bg-secondary bg-opacity-25'><BsShareFill /></button>
                    </div>
                    <div className='d-lg-none d-block'>
                        <button className='btn bg-secondary bg-opacity-25 text-sm'><BsShareFill /> Share</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MeetUp;