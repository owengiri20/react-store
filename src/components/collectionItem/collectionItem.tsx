import React from "react"
import "../../styles/collectionItem.styles.scss"
import { IShopDataItem } from "../../controllers/interfaces"

const CollectionItem = ({ imageUrl, name, price }: IShopDataItem) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>

			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</div>
	)
}

export default CollectionItem
