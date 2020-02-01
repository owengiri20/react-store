import React from "react"
import "../../styles/homepage-styles/menu-item.styles.scss"

interface MenuItemProps {
	title: string
	subTitle: string
}

const MenuItem = ({ title, subTitle }: MenuItemProps) => {
	return (
		<div className="menu-item">
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">{subTitle}</span>
			</div>
		</div>
	)
}

export default MenuItem
