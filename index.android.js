import getList from 'react-native-index-page';

getList({
  demos: [
    require('./_ts2js/examples/react-native/basic'),
    require('./_ts2js/examples/react-native/scrolltabbar'),
  ],
  title: require('./package.json').name,
});
