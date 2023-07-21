import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from '../components'

const NavButton = () => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => {
    setShowNav((prev) => !prev)
  }

  if (showNav) {
    return (
      <>
        <Navbar mobile onClick={showNavHandler} />
        <FontAwesomeIcon
          icon={faXmark}
          className='text-white absolute left-7 top-5 cursor-pointer text-3xl block sm:hidden'
          onClick={showNavHandler}
        />
      </>
    )
  }

  return (
    <FontAwesomeIcon
      icon={faNavicon}
      className='absolute left-7 top-5 cursor-pointer text-3xl block sm:hidden'
      onClick={showNavHandler}
    />
  )
}

export default NavButton
