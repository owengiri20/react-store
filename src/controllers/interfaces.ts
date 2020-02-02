export interface IShopData {
	id: number
	title: string
	routeName: string
	items: IShopDataItem[]
}

export interface IShopDataItem {
	id: number
	name: string
	imageUrl: string
	price: number
}
