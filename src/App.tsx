import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Hompage from "./pages/hompage/hompage"
import { Route, Switch, Link } from "react-router-dom"

const App: React.FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Hompage} />
				<Route exact path="/:id" component={TestPage} />
			</Switch>
		</div>
	)
}

export default App

interface Props {}

function TestPage(props: Props) {
	const {} = props
	console.log(props)

	return <div>Test Page</div>
}
