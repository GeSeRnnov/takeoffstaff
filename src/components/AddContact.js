import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddContact() {
	const [newContact, setNewContact] = useState();
	const dispatch = useDispatch();
	const changeTextField = e => setNewContact(e.target.value)
	const saveNewContact = () => {
		dispatch({ type: 'addNewContact', contact: newContact })
		setNewContact('');
	}

	return <div className='add-contact-block'>
		<input 
			type="text" 
			placeholder="Введите новый контакт" 
			className='input-contact' 
			value={newContact}
			onChange={changeTextField}
		/>
		<div 
			className='add-contact'
			onClick={saveNewContact}
		>
			Добавить
		</div>
	</div>
}
