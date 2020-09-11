import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note = (props) => {
    const deleteBtn = () => {
        props.delete(props.id);
    }
    return (
        <>
            <div className='c-note'>
                <div className='note'>
                    <h1> {props.title} </h1>
                    <p> {props.contetn} </p>
                    <button className='delbtn' onClick={deleteBtn}>
                        <DeleteOutlineIcon className='del_icon' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Note;