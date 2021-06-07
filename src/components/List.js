import React from "react"

import Link from "./Link"

const List = props => {
    const linksComponents = props.links.map(link => {
        return (
            <Link
                key={link.id}
                title={link.title}
                url={link.url}
            />
        )
    })
    return (
        <>
            {linksComponents}
        </>
    )
}

export default List
