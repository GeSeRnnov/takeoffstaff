import React from 'react';
import Row from './Row';
import { useSelector, useDispatch } from 'react-redux';

export default function Rows () {	
	const dispatch = useDispatch();
	const contactList = useSelector(state => state.contactList);
	const onChangeContact = params => dispatch({ type: 'changeContact', params });
	const showModal = id => dispatch({ type: 'toggleRemoveModal', id });

	return (
		<div className='contact-rows'>
			{
				contactList.map((contactItem, id) => {
					return contactItem.visible ?
					<div 
						key={contactItem.id}
					>
						<Row
							contactItem={contactItem}
							onChangeContact={onChangeContact}
							showModal={showModal}
						/>
					</div> : ''
				})
			}
		</div>
	)
};
