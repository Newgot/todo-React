import React from 'react'

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import './app.scss'

export default class App extends React.Component {

    idItem = 0

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch'),
        ],
        text: '',
        status: ''
    }

    search(todoData, text) {
        if (text.length === 0) return this.filterItems(todoData, this.state.status)
        return todoData.filter(todoItem => todoItem.label.toUpperCase().indexOf(text.toUpperCase()) > -1)
    }

    filterItems(todoData, status) {
        if (status.length === 0) return todoData
        return todoData.filter(todoItem => todoItem[status])
    }

    onFilter = status => {
        this.setState( {
            status
        })
    }

    searchTodoItems = text => {
        this.setState( {
            text
        })
    }

    createTodoItem(label) {
        const id = this.idItem++
        return {
            label,
            important: false,
            id,
            done: false,
        }
    }

    deleteItem = id => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(todoItem => todoItem.id !== id)
            }
        })
    }

    addItem = label => {
        const {todoData} = this.state
        const todoItem = this.createTodoItem(label)
        todoData.push(todoItem)
        this.setState(() => {
            return {
                todoData
            }
        })
    }

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return todoData.map(todoItem => {
                if (todoItem.id === id) {
                    todoItem.important = !todoItem.important
                }
                return todoItem
            })
        })
    }

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return todoData.map(todoItem => {
                if (todoItem.id === id) {
                    todoItem.done = !todoItem.done
                }
                return todoItem
            })
        })

    }

    render() {
        const {todoData, text, status} = this.state
        const visibleData = this.search(todoData, text)
        const filterData = this.filterItems(visibleData, status)
        const doneCount = filterData.filter(todoItem => todoItem.done).length
        const todoCount = filterData.length - doneCount
        return (
            <div
                className="todo-app container">
                <AppHeader toDo={doneCount} done={todoCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchItems={this.searchTodoItems}/>
                    <ItemStatusFilter
                        status={status}
                        onFilerItems={this.onFilter}
                    />
                </div>
                <TodoList
                    todos={visibleData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onAdded={this.addItem}/>
            </div>
        )
    }
}


