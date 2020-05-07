import React from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Rows from '../components/Rows';
import RemoveConfirm from '../components/RemoveConfirm';
import AddContact from '../components/AddContact';
import { useSelector } from 'react-redux';

export default function ContactListView () {
	const removeModal = useSelector(state => state.showRemoveModal);

	return (<>
		<div id='containerView' >
			<div>
				<Header />				
				<Rows />
				<AddContact />
				{	removeModal ?
					<Modal removeModal={removeModal}>
						<RemoveConfirm />
					</Modal> :
					undefined
				}  
			</div>
		</div>
		</>
	)
};
