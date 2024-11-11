import React from 'react'
import MyFooter from '../MyFooter/MyFooter'
import MyNav from '../MyNav/MyNav'

const NavAndFootLayout = ({ children }) => {
    return (
        <>
            <MyNav />
            {children}
            <MyFooter />
        </>
    )
}

export default NavAndFootLayout
