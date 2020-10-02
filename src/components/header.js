import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useState } from "react"
import Image from "./image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div className="headerImg__container">
        <div className="headerImg">
          <Image alt={data.site.siteMetadata.title} />
        </div>
      </div>

      <header className="header">
        <NavItems
          navigationLinks={[
            {
              navItemName: "blog",
              navItemLink: "/",
            },
            {
              navItemName: "critterpedia",
              menuItems: [
                {
                  link: "/seacreatures",
                  name: "sea creatures",
                },
                {
                  link: "/bugs",
                  name: "bugs",
                },
                {
                  link: "/fish",
                  name: "fish",
                },
              ],
            },
            {
              navItemName: "villagers",
              navItemLink: "/villagers",
            },
            {
              navItemName: "fossils",
              navItemLink: "/fossils",
            },
          ]}
        />
      </header>
    </div>
  )
}

const NavItems = props => {
  return props.navigationLinks.map((item, index) => {
    let navItemContents
    if (item.navItemLink !== undefined) {
      navItemContents = (
        <Link
          className="header__navItem"
          activeClassName="header__navItem--active"
          to={item.navItemLink}
        >
          {item.navItemName}
        </Link>
      )
    }
    if (item.menuItems !== undefined) {
      navItemContents = (
        <NavHover page={item.navItemName}>
          <DropdownMenu items={item.menuItems} />
        </NavHover>
      )
    }

    return (
      <div key={index} className="header__navItem">
        {navItemContents}
      </div>
    )
  })
}

const NavHover = props => {
  const [isShown, setIsShown] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {props.page}
      {isShown && props.children}
    </button>
  )
}

const DropdownMenu = props => {
  const links = props.items.map((item, index) => (
    <Link key={index} to={item.link} className="header__button header__navItem">
      {item.name}
    </Link>
  ))

  return <div className="header__buttonList">{links}</div>
}

export default Header
