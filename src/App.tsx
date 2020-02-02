import React from "react"
import { Route, Switch } from "react-router-dom"
import ShopPage from "./components/shop/shopPage"
import Hompage from "./pages/hompage/hompage"
import "./App.css"

const App: React.FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Hompage} />
				<Route exact path="/shop" component={ShopPage} />
			</Switch>
		</div>
	)
}

export default App
