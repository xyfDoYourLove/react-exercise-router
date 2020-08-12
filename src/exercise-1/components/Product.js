import React from 'react';

class Product extends React.Component{

    state = {
        productDatas: [
            {
            id: 1,
            name: "Bicycle",
            price: 30,
            quantity: 15,
            desc: "Bicycle is Good"
            },
            {
            id: 2,
            name: "TV",
            price: 40,
            quantity: 16,
            desc: "TV is good"
            },
            {
            id: 3,
            name: "Pencil",
            price: 50,
            quantity: 17,
            desc: "Pencil is good"
            }
        ]
    }

    render() {

        let singleProduct

        singleProduct = this.state.productDatas.find((item) => (
            item.id === this.props.match.params.id * 1
        ));

        return <div className='content'>
            <div>
                Product Detial:
            </div>
            <div>
                product name: {singleProduct.name}
            </div>
            <div>
                product price: {singleProduct.price}
            </div>
            <div>
                product quantity: {singleProduct.quantity}
            </div>
            <div>
                product desc: {singleProduct.desc}
            </div>
        </div>
    }
}

export default Product;
