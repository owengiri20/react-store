import React from "react"
import "../../styles/signInSignUp.styles.scss"
import { SignIn } from "../authentication/signIn"

interface Props {}

const SignInSignUp = (props: Props) => {
	const {} = props

	return (
		<div className="signInSignUp">
			<SignIn />
		</div>
	)
}

export default SignInSignUp
