import React from "react"
import { SHOP_DATA } from "./shop.data"
import CollectionPreview from "../collectionPreview/collectionPreview"
import { IShopData } from "../../controllers/interfaces"

function ShopPage() {
	const [collections, setCollections] = React.useState<IShopData[]>(SHOP_DATA)

	return (
		<div className="shop-page">
			{collections.map((shopData: IShopData) => {
				return <CollectionPreview key={shopData.id} {...shopData} />
			})}
		</div>
	)
}

export default ShopPage
