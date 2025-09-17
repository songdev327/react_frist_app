import { useState } from "react";

export const IfElseExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isLoggedInText = () => {
        if (isLoggedIn) {
            return 'Welcome  to the app'
        } else {
            return 'Please log in'
        }
        
        // return isLoggedIn ? 'Welcome  to the app' : 'Please log in'
    }

    return (
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <div>{isLoggedInText()}</div>
        </div>
    )
}