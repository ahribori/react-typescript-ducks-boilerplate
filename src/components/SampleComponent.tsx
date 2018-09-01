import * as React from 'react';

interface SampleComponentProps {
    name: string;
    age: number;
}

class SampleComponent extends React.Component<SampleComponentProps> {
    public render() {
        return (
            <div>
                <p>이름: {this.props.name}</p>
                <p>나이: {this.props.age}</p>
            </div>
        );
    }
}

export default SampleComponent;
