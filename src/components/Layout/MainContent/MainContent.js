"use-client"

const MainContent = (props) => {
    const { children } = props

    return (
        <aside
            style={{
                width: "100%",
                height: "100%",
                padding: "16px",
                overflowY: "scroll",
            }}
        >
            {children}
        </aside>
    )
}

export default MainContent
