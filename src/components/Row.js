import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getIcon } from '../support/supportFunc';

const styles = {
	manageButton: {
		padding: '8px',
	}
}

export default function Row(props) {
	const [isChangableRow, setIsChangableRow] = useState(false);
	const [newValue, setNewValue] = useState('');

	const rowEditorToggler = (newValue) => {
		setIsChangableRow(!isChangableRow);
		setNewValue(newValue.name);
	}

	const changeValue = (e) => setNewValue(e.target.value);

	const saveChangedValue = () => {
		const params = {
			id: props.contactItem.id,
			value: newValue,
		}
		props.onChangeContact(params);
		setIsChangableRow(false);
	}

	const getLabelRow = (contactItem, showModal) => {
		return <div className='contact-row'>
			<p className='contact-address' >
				{`${contactItem.name || ''}`}
			</p>
			{ getIcon("edit", styles.manageButton, rowEditorToggler, contactItem) }
			{ getIcon("delete", styles.manageButton, showModal, contactItem.id) }
		</div>
	}

	const getChangeRow = (contactItem, changeContact = undefined) => {
		return <div className='contact-row'>
			<input 
				value={newValue} 
				onChange={changeValue}
				className='contact-row-input'
			/>
			{ getIcon("save", styles.manageButton, saveChangedValue, changeContact) }
		</div>
	}

	const {
		contactItem,
		onChangeContact,
		showModal,
	} = props;

	return <div className='contact-row'>
		{
			isChangableRow ? 
			getChangeRow(contactItem, onChangeContact) : 
			getLabelRow(contactItem, showModal) 
		}
	</div>
};

Row.propTypes = {
	contactItem: PropTypes.object.isRequired,
	onChangeContact: PropTypes.func.isRequired,
	showModal: PropTypes.func.isRequired,
}

Row.defaultProps = {
	contactItem: [],
}

