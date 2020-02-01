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
		<div
			style={{ backgroundImage: `url(${imgSrc ? imgSrc : "default/image"}` }}
			className={`menu-item ${size ? (size === "large" ? "large-img" : "small-img") : ""}`}
		>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">{"Shop Now"}</span>
			</div>
		</div>
	)
}

export default MenuItem
