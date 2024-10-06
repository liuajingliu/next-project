import NavLink from "@/components/navbar/navLink/NavLink";
import styles from "./links.module.css";

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
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
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
  )
}
