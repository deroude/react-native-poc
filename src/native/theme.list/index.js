import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Theme } from '../theme';
import { themeCollectionLoad } from '../../actions';
import { Text, View } from 'react-native';

class ThemeList extends Component {

    componentWillMount() {
        if (!this.props.themes || this.props.themes.length <= 0)
            this.props.loadThemes();
    }

    render() {
        if (this.props.themes && this.props.themes.length > 0) {
            const themes = this.props.themes.map(t => <Theme key={t.id} theme={t}></Theme>);
            return <View>{themes}</View>;
        }
        if (this.props.loading) {
            return <Text>Loading...</Text>;
        }
        if (this.props.loadError) {
            return <Text>Error...</Text>;
        }
        return null;
    }
}

ThemeList.serverFetch = themeCollectionLoad;

const mapStateToProps = (state) => {
    return { themes: state.themes, loading: state.loading, loadError: state.loadError };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadThemes: () => dispatch(themeCollectionLoad())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeList);