import Item from './Item'
import NoItem from './NoItem'

const List = props => {
  const { data } = props
  console.log(data)
  const dummyItems = [{productName: '어려워'}, {productName: '힝'}]

  const ListItems = data => data ? dummyItems.map(item => <Item key={item.productName} data={item} />) : <NoItem />;

  console.log(data)

  return (
    <ListItems />
  )
}

export default List;