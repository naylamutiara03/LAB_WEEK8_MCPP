import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#f0f0f0",
        padding: 15,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    card: {
        marginBottom: 15,
        borderRadius: 12,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    paragraph: {
        marginTop: 8,
        color: "#555",
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles;
