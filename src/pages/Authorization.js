import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useAuth } from '../hooks/auth.hook';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ContactListView () {
	const dispatch = useDispatch();
	const history = useHistory();
	const { login } = useAuth(dispatch);
	const { loading, request } = useHttp();
	const [form, setForm] = useState({
		email:'',
		password: ''
	})

	const changeHandler = event => setForm({ ...form, [event.target.name]: event.target.value})

	const loginHandler = async () => {
		const fLogin = form.login;
		const fPassword = form.password;
		try {
			const data = await request(`/users?login=${fLogin}&passward=${fPassword}`, 'GET');
			login(data[0].token);
			history.push('/contacts');
		} catch(e) {
			console.log(`Error in login process ${e}`);
		}
	}

	const registerHandler = async () => {
		const login = form.login;
		const password = form.password;
		const token = shortid();

		try {
			const isExisted = await request(`/users?login=${login}`, 'GET');
			if (isExisted.length) {

			} else {
				const newUser = await request('/users', 'POST', {
					login, 
					password,
					token,
				})
				if (newUser.length) {

				}
			}
		} catch(e) {
			console.log(`Error in register process ${e}`);
		}
	}

	return (
		<div id='containerAuth' >
			<div className="col s6 offset-s3">
				<div className='head'>Авторизация</div>
				 <div className='content'>
			        <div className='inputs'>
			        	{!loading ? <div>
			        		<div className="input-field">
					        	<input 
						        	placeholder="Login" 
						        	id="login" 
						        	type="text" 
						        	name="login"
						        	value={form.login}
						        	onChange={changeHandler}
					        	/>
					        </div>

					        <div className="input-field">
					        	<input 
						        	placeholder="Password" 
						        	id="password" 
						        	type="password" 
						        	name="password"
						        	value={form.password}
						        	onChange={changeHandler}
					        	/>
					        </div>
					        
			        	</div> : 
			        	<div className='loading'>
			        		Loading...
			        	</div>}
			        </div>
			        <div className='buttons'>
			          	<button 
				          	className='btn grey lighten-1 waves-effect waves-light' 
			          		onClick={()=>loginHandler(dispatch)}
			          	>
			          		Войти
			          	</button>
			          	<button 
				          	className='btn grey lighten-1 waves-effect waves-light' 
				          	onClick={()=>registerHandler(dispatch)}
			          	>
			          		Регистрация
			          	</button>
			        </div>
		      </div>
			</div>
		</div>
	)
};
