import { Link } from 'react-router-dom'
import IMAGES from '../images/Images'

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
          <span></span>
          <Link
            to='/'
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
          >
            Home
          </Link>
        </li>
        <li className=''>
          <span></span>
          <Link
            to='/currencies'
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
          >
            Crypto currencies
          </Link>
        </li>
        <li>
          <span></span>
          <Link className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'>
            Exchanges
          </Link>
        </li>
        <li>
          <span></span>
          <Link
            className='block p-3 hover:bg-blue-400 cursor-pointer duration-75'
            to='/news'
          >
            News
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
