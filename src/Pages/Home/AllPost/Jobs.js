import React from 'react';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"
import { CgWorkAlt } from "react-icons/cg"


const Jobs = () => {
    return (
        <div className='border rounded'>
            <div className='px-3'>
                <p className='fw-medium mt-3 text-base'>💼️ Job</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4 className='text-lg'>Software Developer</h4>
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
                <div className='d-flex align-items-center gap-lg-4 gap-2'>
                    <div className='d-flex align-items-center gap-2'>
                        <CgWorkAlt className='fw-medium icon-size' />
                        <span className='fw-medium d-lg-block d-none text-md'>Innovaccer Analytics Private Ltd.</span>
                        <span className='fw-medium d-block d-lg-none text-md'>Innovaccer Analytic...</span>
                    </div>
                    <div className='d-flex align-items-center gap-2 fw-medium'>
                        <GrLocation className='icon-size' />
                        <span className='text-md'>Noida, India</span>
                    </div>
                </div>

                <div className='mt-3'>
                    <button className='btn border text-green fw-medium w-100 text-md'>Apply on Timesjobs</button>
                </div>
            </div>
            <div className='px-3 d-flex align-items-center justify-content-between py-3'>
                <div className='d-flex align-items-center gap-1'>
                    <img width={50} height={50} className="rounded-pill object-fit-cover"
                        src="https://i.ibb.co/Y8C6vyh/Rectangle-3-3.png" alt="" />
                    <div>
                        <span className='text-md fw-medium'>Joseph Gray</span>
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

export default Jobs;