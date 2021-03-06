import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import wateringImg from '../src/assets/watering.png';
import colors from '../src/styles/colors';
import fonts from '../src/styles/fonts';
import { Feather } from '@expo/vector-icons'

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text>
                        <Feather name="chevron-right"
                            style={styles.buttonIcon} />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56,

    },

    image: {

        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }

})
