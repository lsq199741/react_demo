import React, {Component} from 'react'
import Top from './top'
import Bottom from './bottom'

class Home extends Component {
    render() {
        return (
            <div>
                <Top/>
                <Bottom/>
            </div>
        );
    }
}

export default Home;
