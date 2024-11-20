import { useEffect } from 'react';
import Input from './Input';

const ChidiyaDisplayBox = ({ children, udd }) => {
    useEffect(() => {
        console.log('udd', udd);
    }, [udd]);
    return (
        <>
            {children}
            <div className='text-center'>
                <Input type='checkbox' disabled checked={udd} />
            </div>
        </>
    );
};

export default ChidiyaDisplayBox;
