import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
    const [textToSearch, setTextToSearch] = useState('')
    return (
        <BookContext.Provider
            value={{
                textToSearch,
                setTextToSearch,
            }}
        >
            {children}
        </BookContext.Provider>
    )
}
