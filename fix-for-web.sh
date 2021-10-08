mkdir node_modules/react-native-web/dist/exports/ViewPropTypes
echo "var ViewPropTypes = { style: null }" >> node_modules/react-native-web/dist/exports/ViewPropTypes/index.js
echo "export default ViewPropTypes;" >> node_modules/react-native-web/dist/exports/ViewPropTypes/index.js
echo "export { default as ViewPropTypes } from './exports/ViewPropTypes';" >> node_modules/react-native-web/dist/index.js