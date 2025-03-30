"use client"

import MainContent from "./MainContent"
import Navbar from "../Navbar/Navbar"
import Stack from "@mui/material/Stack"

const Layout = (props) => {
    const { children } = props

    return (
        <Stack
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Navbar />
            <MainContent>{children}</MainContent>
        </Stack>
    )
}

export default Layout
