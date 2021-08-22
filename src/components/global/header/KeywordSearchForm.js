import { useState } from "react";
import api from '../../../api'

const KeywordSearchForm = events => {
  const [ keyword, setKeyword ] = useState('');
  const { setItems } = events

  const submit = e => {
    e?.preventDefault()

    api.products.get(keyword).then(data => {
      setItems(data.items)
    })
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <button type="submit">상품 검색</button>
    </form>
  )
}

export default KeywordSearchForm;