import * as React from 'react';
import { connect } from 'react-redux';
import SampleComponent from '../components/SampleComponent';
import { RootState } from '../store';
import { fetchSample, SampleState } from '../store/Sample';
import { AnyFunction } from '../models/common';

interface HomeProps {
    sample: SampleState;
    fetchSample: () => void;
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
        await this.props.fetchSample();
    }
}

const mapStateToProps = (state: RootState) => state;

const mapDispatchToProps = (dispatch: AnyFunction) => {
    return {
        fetchSample: () => dispatch(fetchSample()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
