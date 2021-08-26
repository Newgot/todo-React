import React from "react";

import './item-status-filter.scss'

export default class ItemStatusFilter extends React.Component
{

    setStatus = e => {
        e.preventDefault()
        this.props.onFilerItems(e.target.value)
    }

    render ()
    {
        const buttons = () => {
            const filters = [
                {name: 'All', value: ''},
                {name: 'Active', value: 'important'},
                {name: 'Done', value: 'done'},
            ]
            return filters.map(filter => {
                const {status} = this.props
                console.log(status)
                const className = status === filter.value ? 'btn btn-info' : 'btn btn-outline-secondary'
                return (
                    <button key={filter.name}
                        type='button'
                        value={filter.value}
                        className={className}
                        onClick={this.setStatus}
                    >
                        {filter.name}
                    </button>
                )
            })
        }


        return (
            <div className='btn-group'>
                {buttons()}
                {/*<button*/}
                {/*    type='button'*/}
                {/*    value=''*/}
                {/*    className='btn btn-info'*/}
                {/*    onClick={this.setStatus}*/}
                {/*>*/}
                {/*    All*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    type='button'*/}
                {/*    value='important'*/}
                {/*    className='btn btn-outline-secondary'*/}
                {/*    onClick={this.setStatus}*/}
                {/*>*/}
                {/*    Active*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    type='button'*/}
                {/*    value='done'*/}
                {/*    className='btn btn-outline-secondary'*/}
                {/*    onClick={this.setStatus}*/}
                {/*>*/}
                {/*    Done*/}
                {/*</button>*/}
            </div>
        )
    }
}



