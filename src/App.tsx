import * as React from 'react';
import routes from './routes';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                {routes}
            </div>
        );
    }
}

export default App;
