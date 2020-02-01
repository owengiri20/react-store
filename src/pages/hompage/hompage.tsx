import React from "react"

import "../../styles/homepage-styles/homepage.styles.scss"
import Directory from "../../components/hompage/directory/directory"
interface Props {}

function Hompage(props: Props) {
	const {} = props

	return (
		<div className="homepage">
			<Directory />
		</div>
	)
}

export default Hompage
