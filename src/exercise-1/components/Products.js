import React from 'react';
import Header from './Header'
// import productData from '../../exercise-2/mockups/data.json'
import {Switch, Route, Link} from 'react-router-dom';
import Product from './Product';

class Products extends React.Component{

    state = {
        productDatas: [
            {
            "id": 1,
            "name": "Bicycle",
            "price": 30,
            "quantity": 15,
            "desc": "Bicycle is Good"
            },
            {
            "id": 2,
            "name": "TV",
            "price": 40,
            "quantity": 16,
            "desc": "TV is good"
            },
            {
            "id": 3,
            "name": "Pencil",
            "price": 50,
            "quantity": 17,
            "desc": "Pencil is good"
            }
        ]
    }


    render() {
        return <div className='content'>
            <Header />
            <div>
                All Products:
            </div>
            <ul>
                {this.state.productDatas.map(item => (
                    <li key={item.id}>
                        <Link key={item.name} to={`/products/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route exact path="/products/:id" component={Product} />
            </Switch>
        </div>
    }
}

export default Products;
