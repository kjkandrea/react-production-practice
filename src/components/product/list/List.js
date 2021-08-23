import Item from './Item'
import NoItem from './NoItem'

const List = props => {
  const { data } = props

  return (
    <ul>
      {
        data?.length >= 1 ? data.map(item =>
          <Item
            key={item.productName}
            data={item}
          />
        ) : <NoItem />
      }
    </ul>
  )
}

export default List;