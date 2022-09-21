import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class MyWeb extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.citypower.co.za/customers/Pages/Load_Shedding_Downloads.aspx' }} />;
  }
}

export default MyWeb;

//Previous page content
// import { Text } from "native-base"
// import { SafeAreaView, ScrollView } from "react-native"



// const Load = ({navigation}) => {



//     return (
//         <SafeAreaView style={{flex:1}} >
//             <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} >
//                 <Text >Feedback</Text>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }


// export default Load;