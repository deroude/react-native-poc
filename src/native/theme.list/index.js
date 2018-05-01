import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Theme } from '../theme';
import { themeCollectionLoad } from '../../actions';
import { Text, ListView } from 'react-native';

class ThemeList extends Component {

    componentWillMount() {
        if (!this.props.themes || this.props.themes.length <= 0)
            this.props.loadThemes();
    }

    render() {
        if (this.props.themes && this.props.themes.length > 0) {
            var ds=new ListView.DataSource({rowHasChanged:(t1,t2)=>false});
            return <ListView style={{flex:1,marginTop:50}}
                dataSource={ds.cloneWithRows(this.props.themes)}
                renderRow={(t) => <Theme key={t.id} theme={t} />}
            />;
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