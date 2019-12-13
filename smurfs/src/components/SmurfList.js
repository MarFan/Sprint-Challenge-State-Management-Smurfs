import React from 'react';
import { connect } from 'react-redux';

import {List} from 'semantic-ui-react';

import { removeSmurf, getSmurf } from '../store/actions'

const SmurfList = props => {
    return (
        <List size='big' verticalAlign="middle">
            {
                props.smurfList.map(smurf => 
                    <List.Item key={smurf.id} onClick={() => props.getSmurf(smurf.id)} onDoubleClick={() => props.removeSmurf(smurf.id)}>
                        <List.Content>
                            ({smurf.age}) {smurf.name} {smurf.height}
                        </List.Content>
                    </List.Item>
                )
            }
        </List>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        smurfList: state.smurfList,
        smurfSelected: state.smurfSelected
    }
}

export default connect(mapStateToProps, { removeSmurf, getSmurf })(SmurfList);