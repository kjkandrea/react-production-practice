const Item = props => {
  console.log(props)

  return (
    <div>
      <h3>{props.data.productName}</h3>
    </div>
  )
}

export default Item