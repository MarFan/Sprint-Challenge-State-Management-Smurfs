import React, { useContext } from 'react';
import { AllSmurfContext } from '../../context/AllSmurfContext';

import { List } from 'semantic-ui-react';

const SmurfList = () => {
    const {smurfList, chooseSmurf, removeSmurf} = useContext(AllSmurfContext);

    return (
        <List size='big' verticalAlign="middle">
            {
                smurfList.map(smurf => 
                    <List.Item key={smurf.id} onClick={() => chooseSmurf(smurf.id)} onDoubleClick={() => removeSmurf(smurf.id)}>
                        <List.Content>
                            ({smurf.age}) {smurf.name} {smurf.height}
                        </List.Content>
                    </List.Item>
                )
            }
        </List>
    )
}

export default SmurfList;