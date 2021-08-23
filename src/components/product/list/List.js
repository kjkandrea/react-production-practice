import Item from './Item'
import NoItem from './NoItem'

const List = props => {
  const { data } = props
  const ListItems = ({ data }) => {
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

  return (
    <ListItems data={data} />
  )
}

export default List;