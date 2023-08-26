import { useState } from 'react';
import './Dashboard.css';
import React from 'react';
import Modal from 'react-modal';
import TodoModal from './TodoModal';

const Dashboard = ()=>{
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className='dashboard'>
            <div className='button-panel'>
                <button onClick={openModal}>Open Modal</button>
                <Modal isOpen={modalIsOpen} className='modal' onAfterOpen={afterOpenModal} onRequestClose={closeModal} >
                    <TodoModal closeModal={closeModal} />
                </Modal>
            </div>
        </div>
    );
}

export default Dashboard;