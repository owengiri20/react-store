import React from "react"
import { Route, Switch } from "react-router-dom"
import ShopPage from "./components/shop/shopPage"
import Hompage from "./pages/hompage/hompage"
import "./App.css"
import Header from "./components/header/header/header"
import SignInSignUp from "./components/authentication/signInSignUp"

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Hompage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	)
}

export default App
