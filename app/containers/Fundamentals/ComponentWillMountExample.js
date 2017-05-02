import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

let styles;

export default class ComponentWillMountExample extends React.Component {
  static navigationOptions = {
    title: 'componentWillMount Example',
  }

  state = {
    tick: 1,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        tick: this.state.tick + 1,
      });
    }, 2000);
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <ComponentDivider>
            <ExampleTitle title="componentWillMount example" />
            <Text>{this.state.tick}</Text>
          </ComponentDivider>
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
  },
});
