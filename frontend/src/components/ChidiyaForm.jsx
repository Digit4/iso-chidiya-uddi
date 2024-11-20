import { usePlaygroundStore } from '../store/stores';
import ChidiyaDisplayBox from './ChidiyaDisplayBox';
import Input from './Input';
import PageContainer from './PageContainer';

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
        <PageContainer>
            <div className='text-2xl text-center'>Add Chidiya</div>
            <table className=' mx-80 table-auto'>
                <thead>
                    <tr>
                        <th>Chidiya Name</th>
                        <th>Udd</th>
                    </tr>
                </thead>
                <tbody>
                    {chidiyas.length !== 0 ? (
                        chidiyas.map((chidiya, index) => (
                            <tr key={index}>
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
                className='flex flex-col gap-4 text-center justify-center'
            >
                <Input type='text' placeholder='Enter Chidiya Name' />
                <label className='cursor-pointer'>
                    <div>Udd</div>
                    <Input type='checkbox' value='' className='mt-0' />
                </label>
                <Input type='submit' value='Add Chidiya' />
                <Input
                    type='button'
                    value='RemoveAll'
                    onClick={clearChidiyas}
                />
            </form>
        </PageContainer>
    );
};

export default ChidiyaForm;
