import React, { Component } from 'react';
import api from '../../services/api'
import './style.css';


export default class Calculo extends Component {
    state = {
        result: {},
    };

    async componentDidMount() {
        const response = await api.get
    }

    render() {
        return <h1>Resultado Parcial</h1>
    } 
}