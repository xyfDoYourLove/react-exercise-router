import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    
    state = {
        home: <Link style={{ textDecoration:'none'}} to='/'>Home</Link>,
        profile: <Link style={{ textDecoration:'none'}} to='/my-profile'>My Profile</Link>,
        about: <Link style={{ textDecoration:'none'}} to='/about-us'>About Us</Link>,
        products: <Link style={{ textDecoration:'none'}} to='/products'>Products</Link>,
    }

    componentDidMount() {
        if(window.location.pathname === '/') {
            this.setState({
                home: <Link to='/'>Home</Link>
            })
        }
        if(window.location.pathname === '/my-profile') {
            this.setState({
                profile: <Link to='/my-profile'>My Profile</Link>
            })
        }
        if(window.location.pathname === '/about-us') {
            this.setState({
                about: <Link to='/about-us'>About Us</Link>
            })
        }
        if(window.location.pathname === '/products') {
            this.setState({
                products: <Link to='/products'>Products</Link>
            })
        }
    }
    
    render() {
        return <div className='header'>
            <div className='link'>
                {this.state.home}
            </div>
            <div className='link'>
                {this.state.profile}
            </div>
            <div className='link'>
                {this.state.about}
            </div>
            <div className='link'>
                {this.state.products}
            </div>
        </div>
    }
}

export default Home;
