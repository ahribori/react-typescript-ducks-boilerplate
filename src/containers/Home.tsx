import * as React from 'react';
import SampleComponent from '../components/SampleComponent';

class Home extends React.Component {
    public render() {
        return (
            <div>
                <SampleComponent name={'Daniel'} age={30}/>
            </div>
        );
    }
}

export default Home;
