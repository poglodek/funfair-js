
import React from 'react';
import ReactModal from 'react-modal';
import { Button } from './Button';


export default function ScreenPopup({ text, isOpen, setIsOpen }) {


    return (
        <div >
            <ReactModal
                overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                className="bg-white p-6 rounded-md shadow-md"
                isOpen={isOpen}
                contentLabel="Popup!"
                onRequestClose={() => setIsOpen(false)} >
                {text} <br /><br />
                <Button text="OK" callBack={() => setIsOpen(false)} />
            </ReactModal>
        </div>
    );
}

