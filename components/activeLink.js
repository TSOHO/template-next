import {withRouter} from 'next/router'
import classNames from 'classnames'

const ActiveLink = ({children, router, href}) => {
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={classNames({active: router.pathname === href})}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
