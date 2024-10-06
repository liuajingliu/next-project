"use client"
import Link from "next/link"
import styles from "@/components/navbar/navLink/navlink.module.css"
import { usePathname } from "next/navigation"

export default function NavLink({ link }) {
  const pathName = usePathname()
  return (
    <div className={`${styles.container} ${pathName === link.path && styles.active}`}>
      <Link href={link.path}> {link.title}</Link>
    </div>
  )
}
