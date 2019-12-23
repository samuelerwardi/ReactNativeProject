import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import colors from "../Styles/Color";
import { Toast } from "native-base";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === "text" || props.inputType === "email")
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  
  }
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
    ToastAndroid.show(this.state.secureInput.toString(), ToastAndroid.LONG);
  }

  render() {
    const {
      labelText,
      labelTextSize,
      labelTextWeight,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      inputStyle,
      onChangeText,
      showCheckmark,
      autoFocus,
      autoCapitalize,
      placeholder,
      defaultValue,
    } = this.props;
    const { secureInput, scaleCheckmarkValue, inputValue } = this.state;
    const color = labelColor || colors.white;
      const fontSize = labelTextSize || 14;
      const inputColor = textColor || colors.white;
      const borderBottom = borderBottomColor || "transparent";  
    return (

        <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}>
            <Text style={styles.showButtonText}>
              {this.state.secureInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
          ]}
          secureTextEntry={this.state.secureInput}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    showButton: {
      position: "absolute",
      right: 0
    },
    showButtonText: {
      color: colors.white,
      fontWeight: "700"
    }
});
export default InputField;