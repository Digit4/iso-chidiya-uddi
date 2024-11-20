import { useEffect } from 'react';
import Input from './Input';

const ChidiyaDisplayBox = ({ children, udd }) => {
    useEffect(() => {
        console.log('udd', udd);
    }, [udd]);
    return (
        <>
            <td>{children}</td>
            <td>
                <Input type='checkbox' disabled checked={udd} />
            </td>
        </>
    );
};

export default ChidiyaDisplayBox;
