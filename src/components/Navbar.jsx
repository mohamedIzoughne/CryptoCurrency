import { Link } from 'react-router-dom'
import IMAGES from '../images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faNewspaper,
  faMoneyBill,
  faExchange,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='bg-main w-fit content-box pr-8 text-white min-h-screen'>
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
          >
            <FontAwesomeIcon icon={faHouse} className='mr-3' />
            Home
          </Link>
        </li>
        <li className=''>
          <Link
            to='/currencies'
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
          >
            <FontAwesomeIcon icon={faMoneyBill} className='mr-3' />
            Crypto currencies
          </Link>
        </li>
        <li>
          <span></span>
          <Link
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            to='/exchanges'
          >
            <FontAwesomeIcon icon={faExchange} className='mr-3' />
            Exchanges
          </Link>
        </li>
        <li>
          <span></span>
          <Link
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            to='/news'
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
