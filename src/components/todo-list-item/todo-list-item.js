import React from "react";

import './todo-list-item.scss'

export default class TodoListItem extends React.Component {

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const {label, done, important, onToggleImportant, onToggleDone, onDeleted} = this.props

        let classNames = 'todo-list-item'
        classNames += done ? ' done' : ''
        classNames += important ? ' important' : ''

        return (
            <span className={classNames}>
            <span
                className='todo-list-item-label'
                onClick={onToggleDone}>
                {label}
            </span>
            <span
                className='todo-list-item-buttons'>
                 <button
                     type='button'
                     className='btn btn-outline-danger btn-small'
                     onClick={onDeleted}

                 >
                <i className="fas fa-trash-alt"/>
                </button>
                <button
                    type='button'
                    className='btn btn-outline-success btn-small'
                    onClick={onToggleImportant}>
                    <i className="fas fa-exclamation"/>
                </button>
            </span>
        </span>
        )
    }
}
