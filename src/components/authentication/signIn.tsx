import React from "react"
import { FormInput } from "./formInput"
import { CustomButton } from "../subComponents/customButton"
import { signInWithGoogle } from "../../firebase/firebase.utils"

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
				<FormInput
					handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setEmail(e.target.value)
					}}
					type="email"
					name="email"
					required
					value={email}
					label={"email"}
				/>
				<FormInput
					handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setPassword(e.target.value)
					}}
					type="password"
					name="password"
					required={true}
					value={password}
					label={"password"}
				/>

				<div className="buttons">
					<CustomButton type="submit" name="" value="submit" id="">
						sign in
					</CustomButton>

					<CustomButton isGoogleSignIn type="button" onClick={signInWithGoogle} name="" value="" id="">
						sign in with google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export { SignIn }
