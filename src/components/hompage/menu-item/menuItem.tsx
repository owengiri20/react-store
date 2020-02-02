import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import "../../../styles/homepage-styles/menu-item.styles.scss"
import { connect } from "http2"
interface MenuItemProps {
	title: string
	subTitle: string
	imageUrl?: string
	size?: string
	linkUrl: string
}

const MenuItem = (props: any | MenuItemProps | RouteComponentProps) => {
	const { title, imageUrl, size, linkUrl, history } = props
	return (
		<div
			className={`menu-item ${size ? (size === "large" ? "large-img" : "small-img") : ""}`}
			onClick={() => {
				console.log(linkUrl)

				history.push(linkUrl)
			}}
		>
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl ? imageUrl : "default/image"}` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">{"Shop Now"}</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItem)
