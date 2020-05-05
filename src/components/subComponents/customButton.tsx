import React from "react"
import "../../styles/customButton.styles.scss"
interface Props {
	children: any
	type: "button" | "submit"
	name: string
	value: string
	id: string
	onClick?: () => void
	isGoogleSignIn?: boolean
}

const CustomButton = (props: Props) => {
	const {} = props

	return (
		<button type={props.type || "button"} onClick={props.onClick} className={`${props.isGoogleSignIn ? "google-sign-in" : ""} custom-button`}>
			{props.children}
		</button>
	)
}

export { CustomButton }
