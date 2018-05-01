import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';
import ChartView from 'react-native-highcharts';

export class Theme extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        var Highcharts = 'Highcharts';
        var conf = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return <View style={styles.themeBox}>
            <Text style={styles.themeTitle}>{this.props.theme.title}</Text>
            <Image source={{ uri: "http:" + this.props.theme.image.fields.file.url }}
                style={styles.themeImage}
                resizeMode='contain' />
            <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Text style={styles.themeDetailsLink}>Details...</Text>
            </TouchableHighlight>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text style={styles.themeTitle}>{this.props.theme.title}</Text>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.themeDetailsLink}>Hide...</Text>
                        </TouchableHighlight>
                        <ChartView style={{ height: 300 }} config={conf} options={options}></ChartView>
                        <MarkdownView>{this.props.theme.text}</MarkdownView>
                    </View>
                </View>
            </Modal>
        </View>;
    }
}

const styles = StyleSheet.create({
    themeImage: { flex: 1, width: undefined, height: 300 },
    themeBox: { flex: 1, flexDirection: 'column', margin: 5 },
    themeTitle: { fontSize: 16, flex: 0.2 },
    themeDetailsLink: { color: 'purple', fontSize: 14 }
});

const markdownStyles = {
    heading1: { color: 'purple' }
};