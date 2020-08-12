import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render() {
        return <div className='header'>
            

                    <div className='link'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='link'>
                        <Link to='/my-profile'>My Profile</Link>
                    </div>
                    <div className='link'>
                        <Link to='/about-us'>About Us</Link>
                    </div>

            
        </div>
    }
}

export default Home;
