import { Component } from 'react';
import './searchBox.css'

class SearchBox extends Component {
    render () {
        return (
            <div>
                <input className={`search-box ${this.props.className}`} type="search" placeholder={this.props.placeholder} onChange={this.props.handleSearch} />
            </div>
        )
    }
}

export default SearchBox;