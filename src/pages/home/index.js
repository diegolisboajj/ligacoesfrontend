import React, { Component } from 'react';
import api from '../../services/api'
import './style.css';
import { Link } from 'react-router-dom';


export default class Main extends Component {
    
    state = {
        products: []
    };


    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data });
    };
    
    render() {
        const { products } = this.state;
        return (
            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>$/min</th>
                            <th>Plano ?</th>
                            <th>Duracao / min</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    { products.map(product => (
                    <tbody>
                        <tr key={ product._id }>
                            <td>{ product.origem }</td>
                            <td>{ product.destino }</td>
                            <td>{ product.valor }</td>
                            <td>
                                <select>
                                    <option value="?">Selecione um plano</option>
                                    <option value="30">Fale Mais 30</option>
                                    <option value="60">Fale Mais 60</option>
                                    <option value="120">Fale Mais 120</option>
                                </select>
                            </td>
                            <td><input size="4" /></td>
                            <td><Link to={`/products/tarifa-normal/${product._id}`}>Calcular</Link></td>
                        </tr>
                    </tbody>
                ))}
                </table>
                        
            </div>
           
            )
    }
}