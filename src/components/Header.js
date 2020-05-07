import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactListView() {
	const dispatch = useDispatch();
	const contactList = useSelector(state => state.contactList);
	const searchContact = name => dispatch({ type: 'searchContact', name });

	return (
		<div className='head'>
			<div className='statistic'>
				Всего: {contactList.length}
			</div>
			<div className='title'>
				Список контактов
			</div>
			<div className='search'>
				<input
			        type='text'
			        placeholder="Поиск"
					onChange={(e) => searchContact(e.target.value)}
		      	/>
			</div>
		</div>
			
	)
};
