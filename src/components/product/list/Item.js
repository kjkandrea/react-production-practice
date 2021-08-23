const Item = props => {
  console.log(props)
  return (
    <li>
      <h3>{props.data.productName}</h3>
    </li>
  )
}

export default Item