import React from "react"
import "../../styles/formInput.styles.scss"
interface Props {
	handleChange: any
	value: string
	label: string
	name: string
	required: boolean
	type: string
}

export const FormInput = (props: Props) => {
	const {} = props

	return (
		<div className="group">
			<input type={props.type} className="form-input" onChange={props.handleChange} {...props} name="" id="" />
			{props.label ? (
				<label className={`${props.value ? "shrink" : ""} form-input-label`} htmlFor="">
					{props.label}
				</label>
			) : null}
		</div>
	)
}
