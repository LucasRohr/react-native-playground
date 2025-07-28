import CheckBox from "@react-native-community/checkbox"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const SummaryForm = () => {
    const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false)

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.checkboxContainer} activeOpacity={0.6} onPress={() => setIsTermsChecked(prevValue => !prevValue)} >
                <CheckBox
                    testID="terms-checkbox"
                    disabled={false}
                    value={isTermsChecked}
                    onValueChange={(newValue) => setIsTermsChecked(newValue)}
                />

                <Text style={styles.checkboxText}>I agree to Terms and Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity
                testID='send-button'
                style={[styles.button, { backgroundColor: isTermsChecked ? 'fuchsia' : 'gray' }]}
                disabled={!isTermsChecked}
                onPress={() => { }}
            >
                <Text style={styles.buttonText}>Order sundae</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxText: {
        color: 'black',
        fontSize: 12,
        maxWidth: '50%',
        fontWeight: 'bold',
        marginLeft: 6
    },
    button: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop: 12,
        borderRadius: 4,
        backgroundColor: 'fuchsia'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'regular',
    }
})