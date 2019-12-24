import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

export const Button = React.memo(props => {
  const { onPress, text, size } = props;
  const buttonWidth = Dimensions.get("window").width / 4;
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

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  size: PropTypes.string
};
