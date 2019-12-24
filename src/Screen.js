import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { save, equalResult, clearResult } from "./actions";

export default function Screen() {
  const result = useSelector(state => state.result);
  const expression = useSelector(state => state.expression);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        {expression == undefined || expression == null || expression === "0"
          ? result
          : expression}
      </Text>
      <View style={styles.buttonPanel}>
        <View style={styles.numberPanel}>
          <View style={styles.row}>
            <Button text="7" onPress={() => dispatch(save("7"))} />
            <Button text="8" onPress={() => dispatch(save("8"))} />
            <Button text="9" onPress={() => dispatch(save("9"))} />
          </View>
          <View style={styles.row}>
            <Button text="4" onPress={() => dispatch(save("4"))} />
            <Button text="5" onPress={() => dispatch(save("5"))} />
            <Button text="6" onPress={() => dispatch(save("6"))} />
          </View>
          <View style={styles.row}>
            <Button text="1" onPress={() => dispatch(save("1"))} />
            <Button text="2" onPress={() => dispatch(save("2"))} />
            <Button text="3" onPress={() => dispatch(save("3"))} />
          </View>
          <View style={styles.row}>
            <Button text="C" onPress={() => dispatch(clearResult())} />
            <Button text="0" onPress={() => dispatch(save("0"))} />
            <Button text="." onPress={() => dispatch(save("."))} />
          </View>
        </View>
        <View style={styles.operatorPanel}>
          <View style={styles.row}>
            <Button text="/" size="op" onPress={() => dispatch(save("/"))} />
          </View>
          <View style={styles.row}>
            <Button text="*" size="op" onPress={() => dispatch(save("*"))} />
          </View>
          <View style={styles.row}>
            <Button text="+" size="op" onPress={() => dispatch(save("+"))} />
          </View>
          <View style={styles.row}>
            <Button text="-" size="op" onPress={() => dispatch(save("-"))} />
          </View>
          <View style={styles.row}>
            <Button text="=" size="op" onPress={() => dispatch(equalResult())} />
          </View>
        </View>
      </View>
    </View>
  );
}