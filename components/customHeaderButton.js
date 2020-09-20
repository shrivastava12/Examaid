import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

const customHeaderButton = props => {
    return <HeaderButton color="black" iconSize={30}
    {...props}  IconComponent={Ionicons} />
};

export default customHeaderButton;