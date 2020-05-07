import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const classes = {
	container: {
		width: '100%',
	 	padding: '.5em',
	},
	modalHead: {
		padding: '.5em',
		fontWeight: 'bold',
		fontFamily: 'Helvetica, Roboto, Verdana',
	 	color: 'gray',
	},
	buttonsBlock: {
	    display: 'flex',
	    padding: '1em 0.5em',
	    justifyContent: 'flex-end',
	},
	buttons: {
	    margin: '0px 2px',
	},
};

export default function RemoveConfirm (props)  {
	const dispatch = useDispatch();
	const cancelRemove = id => dispatch({ type: 'toggleRemoveModal', id });
	const confirmRemove = () => dispatch({ type: 'removeContact' });

return (
	<div style={classes.container}>
		<div style={classes.modalHead}>
			Вы действительно хотите удалить контакт?
		</div>

		<div>
			<div style={classes.buttonsBlock}>
				<button 
					style={classes.buttons}
		          	className='btn grey lighten-1 waves-effect waves-light' 
					onClick={confirmRemove}
	          	>
	          		Да
				</button>
				<button 
					style={classes.buttons}
		          	className='btn grey lighten-1 waves-effect waves-light' 
					onClick={cancelRemove}
	          	>
					Нет
				</button>
				
			</div>
		</div>
	</div>
)};

RemoveConfirm.propTypes = {
	confirmRemove: PropTypes.func.isRequired,
	cancelRemove: PropTypes.func.isRequired,
}
