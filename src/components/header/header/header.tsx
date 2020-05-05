import React from "react"
import "../../../styles/header.styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Crown } from "../../../assets/images/crown.svg"
import { authx } from "../../../controllers/auth"
import { auth } from "firebase"
interface Props {}

const Header = (props: Props) => {
	const {} = props
	const authxx = authx.useContainer()

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
				{authxx.currentUser ? (
					<div className="option" onClick={() => auth().signOut()}>
						sign out
					</div>
				) : (
					<Link className="option" to="./signin">
						sign in
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
