import * as _ from 'lodash';

const initialState = { 
	showRemoveModal: false,
	contactList: [{
		name: 'Тестовый адрес',
		visible: true,
		id: 1,
	}], 
	token: '',
};

export default function(state = initialState, action) {
	const clone = Object.assign({}, state);
	switch (action.type) {
		case 'searchContact':
			const actionName = action.name.toLowerCase();
			const filteredList = Object.assign([], clone.contactList);
			
			filteredList.forEach((contact, id) => {
				const contactName = contact.name ? contact.name.toLowerCase() : '';
				const isPresent = contactName.indexOf(actionName) !== -1;
				if (actionName) {
					if (isPresent) {
						filteredList[id].visible = true;
					} else {
						filteredList[id].visible = false;
					}
				} else {
					filteredList[id].visible = true;
				}
			})
			clone.contactList = filteredList;
			return clone;
		case 'removeContact':
			const removeRow = _.findIndex(clone.contactList, { id: clone.contactToDelete });
			const newList = Object.assign([], clone.contactList);
			newList.splice(removeRow, 1)
			clone.showRemoveModal = !clone.showRemoveModal;	
			clone.contactList = newList;
			clone.contactToDelete = '';
			return clone;
		case 'toggleRemoveModal':
			const removeModal = clone.showRemoveModal;
			clone.showRemoveModal = !removeModal;
			clone.contactToDelete = action.id;
			return clone;
		case 'changeContact':
			const changedRow = _.findIndex(clone.contactList, { id: action.params.id });
			_.set(clone.contactList, [changedRow, 'name'],  action.params.value);
			return clone;
		case 'addNewContact':
			const contact = action.contact;
			if (_.findIndex(clone.contactList, { name: contact }) === -1) {
				const newId = clone.contactList.length ? _.maxBy(clone.contactList, 'id').id + 1 : 1;
				const newContact = {
					name: contact, 
					done: false, 
					visible: true,
					id: newId,
				}
				const newContactList = clone.contactList.concat(newContact);
				clone.contactList = newContactList; 
			}
			return clone;
		case 'setToken':
			clone.token = action.token;
			console.log('setToken', clone, action);
			return clone;
		default:
			return state;
	}
}