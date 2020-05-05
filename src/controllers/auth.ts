import { auth } from "../firebase/firebase.utils"
import { createContainer } from "unstated-next"
import React from "react"

export const useAuth = () => {
	const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null)
	return {
		currentUser,
		setCurrentUser,
	}
}

export const authx = createContainer(useAuth)
