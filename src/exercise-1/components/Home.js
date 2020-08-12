import React from 'react';
import Header from './Header'

class Home extends React.Component{
    render() {
        return <div className='content'>
            <Header />
            <div>
                This is a beautiful Home Page
            </div>
            <div>
                And the url is '/'
            </div>
        </div>
    }
}

export default Home;
