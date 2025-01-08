import chidiyaSVG from '../assets/chidiya.svg';
import {
    Dialog,
    DialogBackdrop,
    DialogTitle,
    DialogPanel,
} from '@headlessui/react';
import { useState } from 'react';

const ModalContainer = ({ title, children }) => {
    const [open, setOpen] = useState(true);
    return (
        <Dialog open={open} onClose={setOpen} className='relative z-10'>
            <DialogBackdrop
                transition
                className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in'
            />
            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <DialogPanel className='relative transform overflow-hidden rounded-2xl bg-primary text-left shadow-inner transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'>
                        <DialogTitle className='text-2xl font-semibold text-center mt-4 text-gray-900'>
                            {title}
                        </DialogTitle>
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default ModalContainer;
