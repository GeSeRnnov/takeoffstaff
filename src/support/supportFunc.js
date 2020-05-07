import React from 'react';


// Row
export const getIcon = (name, style, func = undefined, params = undefined) => {
	const iconParams = params;
	return <i 
		className="material-icons"
		style={style} 
		onClick={() => {
			if (func) func(iconParams);
		}}
	>
		{name}
	</i>
}

// End Row

// Header
export const getAmount = (list, isDone) => {
	return list.filter(el => el.done == isDone).length
}
// End Header
