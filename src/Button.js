import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./styles";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default Button = React.memo(props => {
  const { onPress, text, size } = props;
  const height =
    size === "op"
      ? Math.floor(buttonWidth - 20) * 0.75
      : Math.floor(buttonWidth - 20);
  const buttonStyles = [styles.button, { height: height }];

  return (
    <React.Fragment>
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
});