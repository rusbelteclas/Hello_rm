/* import { View, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default function HomeScreen() {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View
                style={{
                    height: 90,
                    width: width * 0.5, 
                    backgroundColor: "blue",
                    marginVertical: 5
                }}
            />

            <View
                style={{
                    height: 90,
                    width: width * 0.75, 
                    backgroundColor: "orange",
                    marginVertical: 5
                }}
            />

            <View
                style={{
                    height: 90,
                    width: width * 1, 
                    backgroundColor: "pink",
                    marginVertical: 5
                }}
            />
        </View>
    )
}
 */

import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Sección 1</Text>
            <View style={styles.boxContainer}>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
            </View>
            
            <Text style={styles.sectionTitle}>Sección 2</Text>
            <View style={styles.rectangle}>
                <Text style={styles.paragraphText}>Este es un texto en forma de párrafo.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center"
    },
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.9,
        marginVertical: 10
    },
    box: {
        height: 90,
        width: width * 0.25,
        backgroundColor: "blue",
        marginHorizontal: 5
    },
    rectangle: {
        width: width * 0.9,
        padding: 20,
        backgroundColor: "pink",
        borderRadius: 10,
        marginVertical: 10
    },
    paragraphText: {
        fontSize: 16,
        textAlign: "center"
    }
});
