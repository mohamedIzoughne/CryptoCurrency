import millify from 'millify'

const NewsItem = (props) => {
  const date = getDate()

  function getDate() {
    const newsDate = new Date(props.date)
    const now = new Date()
    let date
    const minutes = new Date(now - newsDate).getMinutes()
    const hours = new Date(now - newsDate).getHours()

    if (hours > 24) {
      const days = Math.floor(hours / 24)
      date = `${days} day${checkIfPlural(days)}`
    } else if (hours >= 1) {
      date = `${hours} hour${checkIfPlural(hours)}`
    } else if (minutes >= 1) {
      date = `${minutes} minute${checkIfPlural(minutes)}`
    } else {
      date = 'now'
    }

    return date
  }

  function checkIfPlural(number) {
    return number === 1 ? ' ago' : 's ago'
  }

  return (
    <li className='bg-white p-3 rounded-md'>
      <div className='row'>
        <div className='flex items-center'>
          <h2 className='font-bold w-5/6'>{props.name}</h2>
          <div className='image-holder w-1/6 m-2'>
            <img
              src={props.thumbnail}
              alt='news thumbnail'
              className='w-full'
            />
          </div>
        </div>
      </div>

      <small className='block'>{props.description}</small>
      <div className='row flex justify-between items-center py-2'>
        <div className='source flex items-center'>
          <div className='image-holder mr-2 w-[30px] rounded-full'>
            <img
              src={props.sourceThumbnail}
              alt='source thumbnail'
              className='rounded-full'
            />
          </div>
          <small>{props.source}</small>
        </div>
        <small className='time'>{date}</small>
      </div>
    </li>
  )
}

export default NewsItem
