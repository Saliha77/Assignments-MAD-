import React, { useEffect, useState } from 'react';
 import { FlatList, Text, View , StyleSheet} from 'react-native';

export default function AlAdhan({ navigation }) {
    const [prayer, setprayer] = useState('');

    const getPrayerTime = async () => {
        const ResposeType = {
          method: 'Get',
          latitude: '51.75865125',
           longitude: '-1.25387785',
             month: '8',
             year:'2022',

        }
        try {
            const response = await fetch('http://api.aladhan.com/v1/calendar?latitude=32.585411&longitude=71.54361700000004&method=2&month=12&year=2022.json', getPrayerTime);
            const json = await response.json();
              
            setprayer(json.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPrayerTime();
    }, []);
console.log('', prayer)
    return (
        <View style={styles.container}>
        
            <FlatList
                data={prayer}
               
                renderItem={({ item }) => (
                    <View>
                    <Text style={styles.text}> {item.timings.Asr}</Text>
                    <Text style={styles.text}> {item.date.readable}</Text>
                    
                   </View>
                    
                    
                
                )}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
      },
      text:{
        borderColor:"black",
        borderWidth:2,
        borderRadius:10,
      padding:1,
        justifyContent:"center",
        fontSize:30,
        color:"black"
    
        
      }
})
