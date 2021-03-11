import React, { Component } from 'react'
import axios from 'axios'

import Main from './Main'

const headerProps = {
    icon: 'search',
    title: 'Pesquisa',
    subtitle: 'Pesquise os usuários pelo nome'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    list: []
}

export default class Search extends Component {
    state = { ...initialState }

    searchUser() {
        const name = document.querySelector('input').value
        axios(baseUrl)
            .then(resp => {
                let users = resp.data
                users = users.filter(user => user.name === name)
                this.setState({ list: users })
            })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning mt-1 ml-1" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mt-1 ml-1" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" name="name" placeholder="Digite o nome para pesquisa" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={() => this.searchUser()}>Pesquisar</button>
                    </div>
                </div>
            </div>
        )
    }
    
    render () {
        return (
            <Main { ...headerProps }>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}