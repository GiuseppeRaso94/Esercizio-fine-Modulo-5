import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
    const [textToSearch, setTextToSearch] = useState('')
    const [bookSelected, setBookSelected] = useState()
    return (
        <BookContext.Provider
            value={{
                bookSelected,
                setBookSelected,
                textToSearch,
                setTextToSearch,
            }}
        >
            {children}
        </BookContext.Provider>
    )
}
