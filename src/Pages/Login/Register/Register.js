import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
	const { createUser, updateUserProfile, verifyEmail } =
		useContext(AuthContext);
	const [error, setError] = useState("");
	const [accepted, setAccepted] = useState(false);
	useTitle("Register");

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.data;
				console.log(user);
				setError("");
				form.reset();
				handleUpdateUserProfile(name, photoURL);
				handleVerifyEmail();
				toast.success("Please Verify Your Email Befor Login");
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};
	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleVerifyEmail = () => {
		verifyEmail()
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Your Name</Form.Label>
				<Form.Control name="name" type="text" placeholder="Your Name" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Photo URL</Form.Label>
				<Form.Control
					name="photoURL"
					type="text"
					placeholder="Your Photo URL"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					name="email"
					type="email"
					placeholder="Enter email"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					name="password"
					type="password"
					placeholder="Password"
					required
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check
					type="checkbox"
					onClick={handleAccepted}
					label={
						<>
							Accept <Link to="/terms">terms and conditions</Link>
						</>
					}
				/>
			</Form.Group>
			<Button variant="primary" type="submit" disabled={!accepted}>
				Register
			</Button>
			<Form.Text className="text-muted">{error}</Form.Text>
		</Form>
	);
};

export default Register;
