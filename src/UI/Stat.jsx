const Stat = (props) => {
  return (
    <li className="bg-white rounded-sm p-2">
      <p className="text-text-main">{props.title}</p>
      <h3 className="text-lg font-bold">{props.value || ". . ."}</h3>
    </li>
  )
}

export default Stat
