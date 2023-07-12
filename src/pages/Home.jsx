import Stat from '../UI/Stat'
import Crypto from '../UI/Crypto'
import Stats from '../components/Stats'
import Cryptos from '../components/Cryptos'
import LatestNews from '../components/LatestNews'
import Loader from '../UI/Loader'

const Home = () => {
  return (
    <>
      <Stats />
      <Cryptos simplified />
      <LatestNews simplified />
    </>
  )
}

export default Home
