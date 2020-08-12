import React from 'react';
import Header from './Header'

class Profile extends React.Component{
    render() {
        return <div className='content'>
            <Header />
            <div>
                Username: XiaoYiFan
            </div>
            <div>
                Gender: Female
            </div>
            <div>
                Work: IT Industry
            </div>
            <div>
                Website: '/my-profile'
            </div>
        </div>
    }
}

export default Profile;
