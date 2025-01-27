import React from 'react'

export const UserDataContext = React.createContext()

const UserContext = ({ children }) => {
    const [userData, setUserData] = React.useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
    })

    
    
    return (
        <div>
            <UserDataContext.Provider value={{ userData, setUserData }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext
