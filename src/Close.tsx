import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

type CloseProps = {
  onPress: () => void;
  rootStyle?: object;
  iconStyle?: object;
  isPanelActive : boolean;
};

export const Close = ({ onPress, rootStyle, iconStyle, isPanelActive }: CloseProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPress()}
      style={[CloseStyles.closeButton, rootStyle, {backgroundColor: isPanelActive ? "#6A6A6A" : "white"}]}
    >
      <CloseIcon iconStyle = {iconStyle} isPanelActive = {isPanelActive}/>
    </TouchableOpacity>
  );
};

const CloseIcon = ({iconStyle, isPanelActive, }) => {
  if (isPanelActive) { 
    return (
      <>
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: "45deg" }] },
        ]}
      />
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: "135deg" }] },
        ]}
      />
      </>
    )
  } else { 
    return ( 
      <Image style = {{width : 20, height : 20}} source = {require('../../../assets/equalizer.png')} />
    )
  }
}

const CloseStyles = StyleSheet.create({
  closeButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    position: "absolute",
    top: -70,
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf : "center",
  },
  iconLine: {
    position: "absolute",
    width: 20,
    height: 2,
    borderRadius: 2,
    backgroundColor: "white",
  },
});
