// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     // plugins: [
//     //   // enable the drawer to appear
//     //   'react-native-reanimated/plugin',
//     // ],

//     plugins: [
      
//       'react-native-reanimated/plugin',
//   ],
//   };
// };



module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
