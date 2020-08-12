import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component{
    render() {
        return <div className='content'>
            <div>
                Company: ThoughtWorks Local
                Location: Bei'Jing
            </div>
            <br />
            <div>
                For more information, please
                view our <Link to='/'>website</Link>
            </div>
        </div>
    }
}

export default About;
