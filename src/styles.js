import { StyleSheet } from 'react-native';

const LandingStyle = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#a599b5' ///'#2e2f2f'
    },
    Label: {
        fontSize: 15,
        color: 'white',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    normalLabel: {
        fontSize: 13,
        color: 'white'
    },
    sampleBox: { 
        padding: 5,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sampleBoxParent: {
        width: '98%',
        margin: 10,
        padding: 2,
    },
    buttonParent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ScrollView: {
        alignItems: 'center'
    },
    customParent: { 
        flex: 1, 
        borderTopRightRadius: 25, 
        borderTopLeftRadius: 25,
        backgroundColor: '#454ade',
        padding: 5
    },
    items: { 
        borderTopLeftRadius: 0,
        borderRadius: 5, 
        padding: 6,
        backgroundColor: '#2e2f2f',
        marginBottom: 5,                                
    },
    ItemLabel: {
        color: 'white',
        fontSize: 12.5
    },
    ItemLabelParent: {
        backgroundColor: '#2e2f2f',
        alignItems: 'center',
        borderTopRightRadius: 5, 
        borderTopLeftRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 0
    }
});


export { LandingStyle };