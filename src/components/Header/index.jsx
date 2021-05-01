import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames/bind'
import { Link } from 'gatsby'

import styles from './index.module.scss'

const cx = cn.bind(styles)

const Header = ({ home }) => {
  return (
    <div className={cx('root', { home })}>
      {home && <Link to='/'>Home</Link>}
      <div>
        <a href='/rss.xml'>RSS</a>
      </div>
    </div>
  )
}

Header.defaultProps = {
  home: false
}

Header.propTypes = {
  home: PropTypes.boolean
}

export default Header
