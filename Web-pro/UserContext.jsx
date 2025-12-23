import { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
    const [countryName, setCountryName] = useState("Palestine");
    const [purpose, setPurpose] = useState("Nature"); // Options: Religious, Nature, Historical

    return (
        <UserContext.Provider value={{ countryName, setCountryName, purpose, setPurpose }}>
            {children}
        </UserContext.Provider>
    );
}
