import './searchBox.css'

function SearchBox (props) {
    return (
        <div>
            <input className={`search-box ${props.className}`} type="search" placeholder={props.placeholder} onChange={props.onSearchHandler} />
        </div>
    )
}
export default SearchBox;