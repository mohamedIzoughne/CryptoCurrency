import Stat from '../UI/Stat'
import Crypto from '../UI/Crypto'
import Stats from '../components/Stats'
import Cryptos from '../components/Cryptos'
import LatestNews from '../components/LatestNews'

const Home = () => {
  return (
    <>
      <Stats />
      <Cryptos simplified />
      <LatestNews />
    </>
  )
}

export default Home
