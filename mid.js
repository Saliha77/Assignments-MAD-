import { View, StyleSheet, Text, FlatList, Pressable, TextInput, Image, } from "react-native";
import  React,{ useState } from "react";
  function ContactBook() {
    const [Data, setData] = useState([
      {id:1,name:"Saliha Aziz",phone:"030678931",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:2,name:"Qasim Khan",phone:"45279927",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:3,name:"Sher Ali",phone:"231782937",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:4,name:"Ahmed Ali",phone:"8643201689",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:5,name:"Abu Bakar",phone:"097535753",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:6,name:"Sania Khan",phone:"054268467",image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"}
    ]);
    const [chooseContact, setChooseContact] = useState(Data[1]);

    function selectItem(item) {
      setChooseContact(item);cddd
      console.log(chooseContact);
    }

    const renderItem=({item})=>{
      return (
        <View style={styles.items}>
          <View style={styles.rower}>
            <Image style={styles.picture} source={{uri: item.image}}/>
            <Text style = {{fontSize: 20, margin: 10}}> {item.name}</Text>
          </View>
          <View style={styles.rower}>
            <Pressable onPress={()=>{
              setData(Data.filter(obj => obj.id !== item.id));
            }}>
              <View style={{width:60,height:20, backgroundColor:'yellow', borderRadius:20, margin: 7}}>
                <Text>  DELETE</Text>
              </View>
            </Pressable>
            <Pressable onPress={()=>{selectItem(item)}}>
            <View style={{width:60,height:20, backgroundColor:'brown', borderRadius:20, margin: 7}}>
                <Text>    EDIT</Text>
              </View>
            </Pressable>
          </View>
        </View>
      );
    }

    function updateContactFunc(contact) {
      Data[contact.key - 1] = contact;
      setData([...Data]);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CONTACTS</Text>
        <View style={styles.CList}>
          <FlatList data={Data} renderItem={renderItem}/>
        </View>
        <View style={styles.Form}>
          <View style={[{justifyContent:'space-between'},styles.rower]}>
            <View style={[styles.rower,{borderWidth:1, margin: 5, paddingLeft: 10}]}>
              <TextInput 
                placeholder="Search" 
                width={120}
                onChangeText={(value)=>{
                  
                }}
              />
            </View>
            <Pressable>
              <View style={styles.button}>
                <Text> Add Item</Text>
              </View>
            </Pressable>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name" 
            value={chooseContact.name}
            onChangeText={(text) =>
              setChooseContact({ ...chooseContact, name: text })
            } />
          <TextInput 
            style={styles.input}
            placeholder="Phone No" 
            value={chooseContact.phone.toString()}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setChooseContact({ ...chooseContact, phone: text })
            }
          />
          <Pressable 
            style={{alignSelf:'center'}}
            onPress={()=>updateContactFunc(chooseContact)}
            >
            <View style={styles.button}>
              <Text>    Save</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    CList: {
      flex: 2,
      backgroundColor: "lightgrey",
    },
    Form: {      
      flex: 1,
      backgroundColor: "grey",
      padding: 10
    },
    container: {
      paddingTop:20,
      flex: 1,
    },
    picture:{
      width:60,
      height:60,
      marginRight: 10,
      marginLeft:2, 
      borderRadius: 30,
      backgroundColor:'red'
    },
    rower: {
      flexDirection: 'row',
    },
    items: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    button: {
      padding: 8,
      width: 80, 
      height:10, 
      margin:10, 
      backgroundColor:'cyan', 
      height:40
    },
    input:{
      borderWidth:1, 
      flex: 1, 
      margin:10, 
      paddingStart: 20
    },
  });
  export default ContactBook;