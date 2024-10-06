import Link from "next/link"

const linksData = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/blog",
    title: "Blog"
  },
   {
    path: "/contact",
    title: "Contact"
  },
]
export default function Links() {
  return (
    <>
     {linksData.map((link) => {
        return <Link href={link.path} key={link.path}> {link.title}</Link>
     })} 
    </>
  )
}
