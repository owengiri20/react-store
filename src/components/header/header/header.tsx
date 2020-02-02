import React from "react"
import "../../../styles/header.styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Crown } from "../../../assets/images/crown.svg"
interface Props {}

const Header = (props: Props) => {
	const {} = props

	return (
		<div className="header">
			<Link to="/">
				<Crown className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>

				<Link className="option" to="/shop">
					CONTACT
				</Link>
			</div>
		</div>
	)
}

export default Header
