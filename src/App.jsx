import { useState } from 'react';

const RegistrationForm = () => {
	const [fullName, setFullName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');

	const handleFullNameChange = (event) => {
		setFullName(event.target.value);
	};

	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div>
			<form>
				<div>
					<label>ФИО:</label>
					<input type="text" value={fullName} onChange={handleFullNameChange} />
				</div>
				<div>
					<label>Номер телефона:</label>
					<input type="number" value={phoneNumber} onChange={handlePhoneNumberChange} />
				</div>
				<div>
					<label>Email адрес:</label>
					<input type="email" value={email} onChange={handleEmailChange} />
				</div>
				<button type="submit">Зарегистрироваться</button>
			</form>

			<p>ФИО: {fullName}</p>
			<p>Номер телефона: {phoneNumber}</p>
			<p>Email адрес: {email}</p>
		</div>
	);
};

export default RegistrationForm;