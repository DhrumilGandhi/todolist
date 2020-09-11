import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        contetn: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((PrevData) => {
            return {
                ...PrevData,
                [name]: value,
            }
        })
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            contetn: '',
        });
    };
    return (
        <>
            <div className='main_note'>
                <form>
                    <input type='text'
                        name='title'
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off' />
                    <br />
                    <textarea rows=''
                        column=''
                        name='contetn'
                        value={note.contetn}
                        onChange={InputEvent}
                        placeholder="write a Notes">
                    </textarea>
                    <br />
                    <Button onClick={addEvent}>
                        <AddIcon className="btnn" />
                    </Button>
                </form>
            </div>

        </>
    )
}

export default CreateNote;