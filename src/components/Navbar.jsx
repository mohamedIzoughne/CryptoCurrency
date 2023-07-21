import { Link } from 'react-router-dom'
import IMAGES from '../images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'
import {
  faHouse,
  faNewspaper,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ mobile, onClick }) => {
  const cssShowOnMobile = mobile ? 'block absolute left-0 top-0 max-w-full' : ''

  const navClasses = twMerge(
    `duration-100 bg-main hidden content-box pr-8 text-white min-h-screen sm:block ${cssShowOnMobile}`
  )

  // {/*'hidden sm:block'*/ }

  return (
    <nav className={navClasses}>
      <div className='flex items-center'>
        <div className='image-holder p-3 w-16'>
          <img src={IMAGES.logo} alt='Logo' />
        </div>
        <h1 className='logo-label text-2xl font-bold'>CrytoVerse</h1>
      </div>
      <ul className='mt-8'>
        <li>
          <Link
            to='/'
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faHouse} className='mr-3' />
            Home
          </Link>
        </li>
        <li className=''>
          <Link
            to='/currencies'
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faMoneyBill} className='mr-3' />
            Crypto currencies
          </Link>
        </li>
        <li>
          <span></span>
          <Link
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            to='/news'
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faNewspaper} className='mr-3' />
            News
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
