import React from 'react'

import './search-panel.scss'

export default class SearchPanel extends React.Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            text  : e.target.value
        })
        this.props.onSearchItems(this.state.text)
    }


    render() {
        const searchText = 'Type here to search'
        const searchStyle = {
            fontSize: '25px'
        }
        return <input
            className='search-input'
            onChange={this.onChange}
            value={this.state.text}
            type="text"
            style={searchStyle}
            placeholder={searchText}/>
    }
}
