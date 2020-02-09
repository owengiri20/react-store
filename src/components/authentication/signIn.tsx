import React from "react"

interface Props {}

const SignIn = (props: Props) => {
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")

	const {} = props

	const handleSubmit = (e: any) => {
		e.preventDefault()

		setEmail("")
		setPassword("")
	}

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setEmail(e.target.value)
					}}
					type="text"
					name="email"
					required
					value={email}
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setPassword(e.target.value)
					}}
					type="password"
					name="password"
					required
					value={password}
				/>
				<input type="submit" name="" value="submit" id="" />
			</form>
		</div>
	)
}

export { SignIn }
