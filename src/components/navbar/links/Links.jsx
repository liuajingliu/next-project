"use client"
import NavLink from "@/components/navbar/navLink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";

const linksData = [
  {
    path: "/",
    title: "HomePage"
  },
  {
    path: "/about",
    title: "About"
  },
   {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/blog",
    title: "Blog"
  }
]
export default function Links() {
  const [open, setOpen ] = useState(false);

  const session = true;
  const isAdmin = true;

  const handleClick = () => {
    setOpen (open => !open)
  }

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {linksData.map((link) => {
            return <NavLink key={link.path }link={link} />
        })}
        { session ? (
          <>
            {isAdmin && (
              <>
                <NavLink link={ { path: "/admin", title: "Admin" }} />
                <button className={styles.logout}>logout</button>
              </>
            )}
          </>
        ) : (
            <NavLink  link={ { path: "/login", title: "Login" }} />
        )}
      </div>
      <button  className={styles.menuButton} onClick={handleClick}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {linksData.map((link) => {
              return <NavLink key={link.path }link={link} />
          })}
        </div>
      )}
    </div>
  )
}
