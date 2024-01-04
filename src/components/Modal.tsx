import React, { useState } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from "react-native";
import { Modal as ModalType } from "../types";

const Modal = ({
  heading,
  buttonText,
  children,
  button,
  open,
  setOpen,
}: ModalType) => {
  return (
    <View>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpen(!open);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{heading}</Text>
            {children}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpen(!open)}
            >
              <Text style={styles.textStyle}>{buttonText}</Text>
            </Pressable>
          </View>
        </View>
      </RNModal>
      <Pressable
        style={[styles.OpenButtonContainer]}
        onPress={() => setOpen(true)}
      >
        {button}
      </Pressable>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  OpenButtonContainer: {
    height: 40,
    width: 50,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
