import React from 'react'
import Link from 'next/link';
import styles from '../styles/Header.module.scss'

const Header = () => {
  const navLinks = [
    {
      slug: 'home',
      title : 'Home'
    },
    {
      slug: 'cobntact',
     title : 'Contact'
    },
    {
      slug: 'about',
      title : 'About'
    },
    {
      slug: 'work',
      title : 'work'
    }
  ]
  return (
    <nav className={styles.navbar}>
        <div>
          <span className={styles.logo}>Logo</span>
        </div>
        <ul>
          {navLinks.map((link,id)=>(
            <Link key={link} href={`${link.slug}`}>
                <li>{link.title}</li>
            </Link>   
          ))}
        </ul>
          <button className={styles.hirebtn}>Hire me</button>
    </nav>
  )
}

export default Header
