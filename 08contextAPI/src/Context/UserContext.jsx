import { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext(null);

// Create and export the UserContextProvider
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Export both the context and the provider
export { UserContext, UserContextProvider };
