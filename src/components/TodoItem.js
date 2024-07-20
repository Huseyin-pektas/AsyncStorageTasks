import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../themes/Colors';
import StatusButton from './StatusButton';
import { useNavigation } from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({ data }) => {
    const navigation = useNavigation()

    console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.itemHeader}>

                <Text style={[styles.taskList,
                { textDecorationLine: data?.status === "closed" ? "line-through" : "null" }]
                }>{data?.title.toUpperCase()}</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.statusContainer}>
                        <Text style={{
                            color: data?.status === ("open" || "progress") ? "#72966f"
                                : "#d6825c"
                        }} >{data?.status} </Text>
                    </View>
                    <StatusButton iconName="pencil" color="green"
                        onPress={() => navigation.navigate(ScreenName.addTask)}

                    />
                    <StatusButton iconName="delete" color="red" />
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View>
                    <Text>Başlangıç Tarihi</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="clock-outline" size={15} />
                        <Text
                            style={{ marginLeft: 5, color: "purple", fontSize: 12, fontWeight: "700" }}>15.06.2024 - 15.59</Text>
                    </View>
                </View>
                <View>
                    <Text>Bitiş Tarihi</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="clock-outline" size={15} />
                        <Text style={{ marginLeft: 5, color: "purple", fontSize: 12, fontWeight: "700" }}>25.06.2024 - 15.59</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 15,
        marginBottom: 15
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    taskList: {
        flex: 1,
        fontSize: 15,
        color: colors.text.primary,
        fontWeight: "600",
        marginBottom: 5
    },
    statusContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})