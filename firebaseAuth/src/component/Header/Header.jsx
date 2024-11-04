import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css';
import { blogContext } from '../../context/context';

function Header() {
  const ctx=useContext(blogContext)
  return (
    <div className={styles.header}>
      <div className={styles.link}>
      <Link to='/'> Home</Link>
        <Link to='/create'>Create Blog</Link>

      </div>
      <div>
        hello, {ctx.state.user.displayName}
      </div>
    </div>
  )
}

export default Header
