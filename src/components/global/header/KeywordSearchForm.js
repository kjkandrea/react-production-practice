const KeywordSearchForm = () => {
  const submit = e => {
    e.preventDefault()
    alert('funk you')
  }

  return (
    <form onSubmit={submit}>
      <h2>귀여운 서치폼</h2>
      <input type="text" />
      <button type="submit">상품 검색</button>
    </form>
  )
}

export default KeywordSearchForm;