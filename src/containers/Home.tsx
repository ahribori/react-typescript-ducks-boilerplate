import * as React from 'react';
import { connect } from 'react-redux';
import SampleComponent from '../components/SampleComponent';
import { RootState } from '../store';
import { fetchSample } from '../store/Sample';
import { Dispatch } from 'redux';

interface HomeProps {
    dispatch: Dispatch<any>
}

class Home extends React.Component<HomeProps> {
    public render() {
        return (
            <div>
                <SampleComponent name={'Daniel'} age={30}/>
            </div>
        );
    }

    public async componentDidMount() {
        await this.props.dispatch(fetchSample());
    }
}

const mapStateToProps = (state: RootState) => state;

export default connect(mapStateToProps)(Home);
