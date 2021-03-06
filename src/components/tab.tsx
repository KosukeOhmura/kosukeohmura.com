import React from "react"

import { Link } from "gatsby"

const Tab = ({ location }) => {
  const items = [
    {
      title: "Info",
      to: "/",
    },
    {
      title: "Posts",
      to: "/posts/",
    },
  ]

  return (
    <ul className="tab">
      {items.map(({ title, to }) => {
        return (
          <li key={to}>
            <Link to={to} aria-selected={location.pathname === to}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Tab
