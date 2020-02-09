import React from "react"
import "../../styles/customButton.styles.scss"
interface Props {
	children: any
	type: string
	name: string
	value: string
	id: string
}

const CustomButton = (props: Props) => {
	const {} = props

	return <button className="custom-button">{props.children}</button>
}

export { CustomButton }
