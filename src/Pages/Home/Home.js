import React, { useState } from 'react';
import AllPost from './AllPost/AllPost';
import { ImPencil } from "react-icons/im"
import PostModal from '../../Components/PostModal/PostModal';
import ModalBody from '../../Components/Modal/ModalBody';



const Home = () => {

    const [postModalIsOpen, setPostModalIsOpen] = useState(false);
    const [changePage, setChangePage] = useState("All Posts")
    function openPostModal() {
        setPostModalIsOpen(true);
    }
    function closeModal() {
        setPostModalIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#000000",
            borderRadius: "8px",
            padding: "40px"
        },
    };


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    return (
        <div className='position-relative'>
            <div>
                <AllPost></AllPost>
            </div>

            <div
                onClick={openPostModal}
                className='position-sticky mobile-post bg-secondary d-flex align-items-center justify-content-center fs-4 d-md-none d-block'>
                <ImPencil />
            </div>

            <PostModal
                postModalIsOpen={postModalIsOpen}
                customStyles={customStyles}
                closeModal={closeModal}
            ></PostModal>

            <ModalBody
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            ></ModalBody>
        </div>
    );
};

export default Home;