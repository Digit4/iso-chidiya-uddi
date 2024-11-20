import { usePlaygroundStore } from '../store/stores';
import ChidiyaDisplayBox from './ChidiyaDisplayBox';
import Input from './Input';
import PageContainer from './PageContainer';

const ChidiyaForm = () => {
    const { chidiyas, addChidiya, removeChidiya, clearChidiyas } =
        usePlaygroundStore();
    const handleAddChidiya = async (e) => {
        e.preventDefault();
        await addChidiya(e.target[0].value);
        console.log('add', e.target[0].value);
        e.target[0].value = '';
        e.target[0].focus();
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
                          <ChidiyaDisplayBox>{chidiya}</ChidiyaDisplayBox>
                          <button
                              onClick={(e) => handleRemoveChidiya(e, index)}
                          >
                              X
                          </button>
                      </div>
                  ))
                : null}
            <form onSubmit={handleAddChidiya}>
                <Input type='text' placeholder='Enter Chidiya Name' />
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
