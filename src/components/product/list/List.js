import Item from './Item'
import NoItem from './NoItem'

const List = props => {
  const { data } = props
  console.log(data?.length)
  const ListItems = data => data?.length >= 1 ? data.map(item =>
      <li>
        <Item
          key={item.productName}
          data={item}
        />
      </li>
    ) : <NoItem />;

  return (
    <ul>
      <ListItems />
    </ul>
  )
}

export default List;