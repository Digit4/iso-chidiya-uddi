import { useEffect } from 'react';
import Input from './Input';

const ChidiyaDisplayBox = ({ children, udd }) => {
    useEffect(() => {
        console.log('udd', udd);
    }, [udd]);
    return (
        <>
            <td className='min-w-24 max-w-24 overflow-hidden overflow-ellipsis'>
                {children}
            </td>
            <td>
                <Input type='checkbox' disabled checked={udd} />
            </td>
        </>
    );
};

export default ChidiyaDisplayBox;
