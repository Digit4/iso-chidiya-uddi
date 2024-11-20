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
            {chidiyas
                ? chidiyas.map((chidiya, index) => (
                      <div
                          key={index}
                          itemID={index}
                          className='flex gap-4 justify-center'
                      >
                          <ChidiyaDisplayBox udd={chidiya.udd}>
                              {chidiya.name}
                          </ChidiyaDisplayBox>
                          <button
                              onClick={(e) => handleRemoveChidiya(e, index)}
                          >
                              X
                          </button>
                      </div>
                  ))
                : null}
            <form
                onSubmit={handleAddChidiya}
                className='flex flex-col gap-2 justify-center'
            >
                <Input type='text' placeholder='Enter Chidiya Name' />
                <div className='flex flex-col gap-2 text-center'>
                    <div>Udd</div>
                    <Input type='checkbox' value={true} className='mt-0' />
                </div>
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
