import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useState } from "react"
import headerStyles from "./header.module.scss"

const Navbar = () => {
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
      <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </header>
      {/* <hr /> */}
      <nav className={headerStyles.navbar}>
        <NavItems
          navigationLinks={[
            {
              navItemName: "blog",
              navItemLink: "/",
            },
            {
              navItemName: "critterpedia guide",
              menuItems: [
                {
                  link: "/insects",
                  name: "insects",
                },
                {
                  link: "/fish",
                  name: "fish",
                },
              ],
            },
            // {
            //   navItemName: "diy recipes",
            //   navItemLink: "/diyRecipes",
            // },
            {
              navItemName: "custom designs",
              menuItems: [
                {
                  link: "/clothing",
                  name: "clothes designs",
                },
                {
                  link: "/paths",
                  name: "path designs",
                },
              ],
            },
          ]}
        />
      </nav>
      <hr />
    </div>
  )
}

const NavItems = props => {
  return props.navigationLinks.map((item, index) => {
    let navItemContents
    if (item.navItemLink !== undefined) {
      navItemContents = (
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
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
      <div key={index} className={headerStyles.navItem}>
        {navItemContents}
      </div>
    )
  })
}

const NavHover = props => {
  const [isShown, setIsShown] = useState(false)

  return (
    <button
      className={headerStyles.navButton}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={headerStyles.navItem}>{props.page}</div>
      {isShown && props.children}
    </button>
  )
}

const DropdownMenu = props => {
  const links = props.items.map((item, index) => (
    <Link key={index} to={item.link} className={headerStyles.menuItem}>
      {item.name}
    </Link>
  ))

  return <div className={headerStyles.menuList}>{links}</div>
}

export default Navbar
