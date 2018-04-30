import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class Theme extends Component {

    render() {
        return <View>
            <Text>{this.props.theme.title}</Text>
            <Image source={{uri:"http:"+this.props.theme.image.fields.file.url}} style={{width:100,height:75}} />
        </View>;
    }
}

