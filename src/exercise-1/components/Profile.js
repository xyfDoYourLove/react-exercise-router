import React from 'react';
import Header from './Header'

class Profile extends React.Component{
    render() {
        return <div className='content'>
            <Header />
            <div>
                Username: XiaoYiFan
                Gender: Female
                Work: IT Industry
                Website: '/my-profile'
            </div>
        </div>
    }
}

export default Profile;
