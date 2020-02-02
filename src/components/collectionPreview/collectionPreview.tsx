import React from "react"
import "../../styles/collectionsPreview.styles.scss"
import { IShopData, IShopDataItem } from "../../controllers/interfaces"
import CollectionItem from "../collectionItem/collectionItem"

function CollectionPreview(props: IShopData) {
	const { title, items } = props

	return (
		<div className="collection-preview">
			<h1 className={"title"}>{title}</h1>
			<div className="preview">
				{items
					.filter((i, idx) => idx < 4)
					.map((i: IShopDataItem) => {
						return <CollectionItem key={i.id} {...i} />
					})}
			</div>
		</div>
	)
}

export default CollectionPreview
