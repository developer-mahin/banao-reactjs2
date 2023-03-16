import React from 'react';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"

const Education = () => {

    return (
        <div className='border rounded'>
            <div>
                <img src="https://i.ibb.co/YNBsgw7/Rectangle-5-2.jpg" className='img-fluid' alt="" />
            </div>
            <div className='px-3'>
                <p className='fw-medium mt-3 text-base'>🔬️ Education</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4 className='text-lg'>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>

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
                <div>
                    <p className='text-secondary text-base'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
            </div>
            <div className='px-3 d-flex align-items-center justify-content-between py-3'>
                <div className='d-flex align-items-center gap-1'>
                    <img width={50} height={50} className="rounded-pill object-fit-cover"
                        src="https://i.ibb.co/BtXdx0c/Rectangle-3-1.png" alt="" />
                    <div>
                        <span className='text-md fw-medium'>Sarah West</span>
                        <div className='d-lg-none d-block'>
                            <AiOutlineEye />
                            <span className='ms-2 text-md'>1.4k views</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-4'>
                    <div className='d-lg-block d-none m-0'>
                        <AiOutlineEye />
                        <span className='ms-1'>1.4k views</span>
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

export default Education;