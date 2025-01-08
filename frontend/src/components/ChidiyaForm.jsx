import { usePlaygroundStore } from '../store/stores';
import ChidiyaDisplayBox from './ChidiyaDisplayBox';
import Input from './Input';
import ModalContainer from './ModalContainer';

const ChidiyaForm = () => {
    const { chidiyas, addChidiya, removeChidiya, clearChidiyas } =
        usePlaygroundStore();
    const handleAddChidiya = async (e) => {
        e.preventDefault();
        const chidiyaData = {
            name: e.target[0].value,
            udd: e.target[1].checked,
        };
        await addChidiya(chidiyaData);
        console.log('add', chidiyaData);
        e.target[0].value = '';
        e.target[0].focus();
        e.target[1].checked = false;
    };

    const handleRemoveChidiya = async (e, index) => {
        await removeChidiya(index);
    };
    return (
        <ModalContainer title='Add Chidiyas'>
            <table className='mx-20 justify-center min-h-80 flex flex-col table-auto'>
                <thead className='max-h-8'>
                    <tr className='flex flex-row justify-between'>
                        <th>Chidiya Name</th>
                        <th>Udd</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {chidiyas.length !== 0 ? (
                        chidiyas.map((chidiya, index) => (
                            <tr
                                className='flex flex-row justify-between'
                                key={index}
                            >
                                <ChidiyaDisplayBox udd={chidiya.udd}>
                                    {chidiya.name}
                                </ChidiyaDisplayBox>
                                <td>
                                    <button
                                        onClick={(e) =>
                                            handleRemoveChidiya(e, index)
                                        }
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <div className='text-center'>Add some chidiyas</div>
                    )}
                </tbody>
            </table>
            <form
                onSubmit={handleAddChidiya}
                className='flex flex-col gap-4 text-center mb-4 justify-center'
            >
                <div className='flex flex-row gap-4 justify-center'>
                    <Input type='text' placeholder='Enter Chidiya Name' />
                    <label className='cursor-pointer'>
                        <div>Udd</div>
                        <Input type='checkbox' value='' className='mt-0' />
                    </label>
                </div>
                <Input type='submit' value='Add Chidiya' />
                {/* <Input
                    type='button'
                    value='RemoveAll'
                    onClick={clearChidiyas}
                /> */}
            </form>
            <Input type='button' value='Enter Game' className='mb-4' />
        </ModalContainer>
    );
};

export default ChidiyaForm;
