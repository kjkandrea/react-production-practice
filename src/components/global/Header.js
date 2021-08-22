import KeywordSearchForm from './header/KeywordSearchForm'

const Header = events => {
    const { setItems } = events;

    return (
      <header>
        <h1>헤더헤더</h1>
        <KeywordSearchForm setItems={setItems} />
      </header>
    )
}

export default Header