import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: '', name: ''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Id</label>
			<input type="number" name="id" value={user.id} onChange={handleInputChange} />
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm