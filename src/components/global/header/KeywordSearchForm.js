import { useState } from "react";

const KeywordSearchForm = () => {
  const [ keyword, setKeyword ] = useState('');

  const submit = e => {
    e.preventDefault()
    console.log(keyword)
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