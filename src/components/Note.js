import React, { Component } from 'react';  
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    TouchableOpacity, 
} from 'react-native';  
  
export default class Note extends Component {  
    render() {  
        return (  
            <View key={this.props.keyVal} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity 
                onPress={this.props.deleteMethod}
                style={styles.noteDelete}
                >
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>

            </View>
        );  
    }  
}  
const styles = StyleSheet.create({  
    note: {  
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',

    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
         position: 'absolute',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#cc3300',
         padding: 20,
         top: 10,
         bottom: 10,
         right: 10,
         borderRadius: 50,
    },
    noteDeleteText: {
        color: 'white'
    }
  
})  