import millify from 'millify'
import { Link } from 'react-router-dom'

const Crypto = (props) => {
  let { uuid, name, price, marketCap, rank, change, iconUrl } = props.coin

  price = millify(price)
  marketCap = millify(marketCap)

  return (
    <li className='bg-white p-5 rounded-md'>
      <Link to={`/currencies/${uuid}`}>
        <div
          className='header border-b border-b-slate-300 border-solid
        pb-3 flex items-center justify-between'
        >
          <h4>
            {rank}.{name}
          </h4>
          <div className='logo w-8'>
            <img src={iconUrl} className='max-w-full' alt='' />
          </div>
        </div>
        <div className='body pt-3'>
          <ul>
            <li className='py-2'>Price: {price}</li>
            <li className='py-2'>Market Cap: {marketCap}</li>
            <li className='py-2'>Daily Change: {change}</li>
          </ul>
        </div>
      </Link>
    </li>
  )
}

export default Crypto
