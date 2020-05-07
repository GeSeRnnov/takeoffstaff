import { useState, useCallback, useEffect } from 'react';

export const useAuth = (dispatch = null) => {
	const [token, setToken] = useState(null)
	const login = useCallback((token) => {
		setToken(token);
		dispatch({ type: 'setToken', token });
		if(token) localStorage.setItem('token', token);
	}, [])

	const logout = useCallback(()=> {
		setToken(null)
		dispatch({ type: 'setToken', token: '' });
		localStorage.removeItem('token')
	}, [])


	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) setToken(token)
	}, [login])

	return { login, logout, token }
}
