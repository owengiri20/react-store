import React from "react"
import "../../../styles/homepage-styles/menu-item.styles.scss"

interface MenuItemProps {
	title: string
	subTitle: string
	imgSrc?: string
	size?: string
}

const MenuItem = ({ title, subTitle, imgSrc, size }: MenuItemProps) => {
	return (
		<div className={`menu-item ${size ? (size === "large" ? "large-img" : "small-img") : ""}`}>
			<div className="background-image" style={{ backgroundImage: `url(${imgSrc ? imgSrc : "default/image"}` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">{"Shop Now"}</span>
			</div>
		</div>
	)
}

export default MenuItem
