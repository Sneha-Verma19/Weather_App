
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Cards from './Cards';


export default function Home(props) {

    const [city, setCity] = useState('');

    const cities = [
        {
            name: 'New Delhi',
            image: require('../src/assets/images/image3.jpg')
        },
        {
            name: 'New York',
            image: require('../src/assets/images/image4.jpg')
        },
        {
            name: 'Londan',
            image: require('../src/assets/images/image5.jpg')
        },
        {
            name: 'San Francisco',
            image: require('../src/assets/images/image6.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../src/assets/images/image7.jpg')
        }
    ]

    return (
        <View>
            <ImageBackground source={require('../src/assets/images/image2.jpg')} style={{ height: deviceHeight, width: deviceWidth }}
                imageStyle={{ opacity: 0.6, backgroundColor: "black" }} />

            <View style={{ position: 'absolute', addingVertical: 20, paddingHorizontal: 10, }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    width: deviceWidth - 20
                }}>


                    <Icon name='menu' size={46} color='white' />
                    <Image source={require('../src/assets/images/user.jpg')} style={{ height: 46, width: 46, borderRadius: 50 }} />


                </View>
                <View style={{
                    paddingHorizontal: 20,
                    marginTop: 100
                }}>
                    <Text style={{
                        fontSize: 45,
                        color: 'white'
                    }}>
                        Hello Krishna
                    </Text>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>


                        search by city name
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: 'white',
                        marginTop: 10, paddingHorizontal: 10
                    }}>


                        <TextInput
                            value={city}
                            onChangeText={(val) => setCity(val)}

                            placeholder='Search City'
                            placeholderTextColor='white'
                            style={{
                                paddingHorizontal: 13,
                                color: 'white'
                            }} />

                        <TouchableOpacity onPress={() => props.navigation.navigate('Details',{name:city}) }>

                            <Icon name='search'
                                size={22} color='white' />
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        paddingHorizontal: 10,
                        marginTop: 150,
                        marginBottom: 20
                    }}>
                        My Location
                    </Text>
                    <FlatList
                        horizontal
                        data={cities}
                        renderItem={({ item }) => (
                            <Cards name={item.name} image={item.image} navigation={props.navigation} />


                        )} />

                </View>

            </View>

        </View>
    )
}







