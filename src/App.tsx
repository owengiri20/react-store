import React from "react"
import { Route, Switch } from "react-router-dom"
import ShopPage from "./components/shop/shopPage"
import Hompage from "./pages/hompage/hompage"
import "./App.css"
import Header from "./components/header/header/header"
import SignInSignUp from "./components/authentication/signInSignUp"
import { auth } from "./firebase/firebase.utils"
import { authx } from "../src/controllers/auth"

const AppInner: React.FC = () => {
	const authxx = authx.useContainer()
	React.useEffect(() => {
		auth.onAuthStateChanged(user => {
			authxx.setCurrentUser(user)
			console.log(user)
		})
	})
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

export const App = () => {
	return (
		<authx.Provider>
			<AppInner />
		</authx.Provider>
	)
}

export default App
