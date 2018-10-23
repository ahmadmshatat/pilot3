import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
import { observer } from "mobx-react";
import "./list.css";
import client from './../feathers'


@observer
class List extends Component {

    componentDidMount() {
        const listService = client.service('list');
        listService.find().then(page => {
            this.props.store.list = page.data
        }
        );
    }

    createTodo = (e) => {
        e.preventDefault()
        const listService = client.service('list');

        if (e.target[0].value.trim().length > 0 || e.target[1].value.trim().length > 0) {
            listService.create({
                title: e.target[0].value,
                description: e.target[1].value
            });
            listService.find().then(page => {
                this.props.store.list = page.data
         });

            this.props.store.todos = ""
            this.props.store.todosDesc = ""
        }
    }

    deleteItem = (id) => {
        const listService = client.service('list');
        listService.remove(id)
            .then(() => this.props.store.list = this.props.store.list.filter((item) => item.id !== id) )
    }

    todoValue = (e) => {
        this.props.store.todos = e.target.value
    }
    todoDesc = (e) => {
        this.props.store.todosDesc = e.target.value
    }

    render() {

        const { list } = this.props.store
        const liList = list.map(item => (

            <li key={item.id}>
                <Link to={`/${item.id}`}>
                    {item.title}: <span>{item.description}</span>
                </Link>
                <button onClick = {()=> this.deleteItem(item.id) }>Delete</button>
            </li>

        ))
        return (
            <Fragment>
                <div className="main">

                    <div className="todo">
                        <form onSubmit={this.createTodo}>
                            <input value={this.props.store.todos} onChange={this.todoValue} />
                            <textarea value={this.props.store.todosDesc} onChange={this.todoDesc} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    <div>
                        <ul>
                            {liList}
                        </ul>
                    </div>

                </div>
            </Fragment>

        )
    }
}

export default List;
