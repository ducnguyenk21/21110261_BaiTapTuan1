import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // Chuyển sang trang Home sau 10 giây
    }, 10000);

    return () => clearTimeout(timer); // Hủy bỏ timer nếu component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Nguyễn Đức Nguyên</Text>
      <Text style={styles.text}>MSSV: 21110261</Text>
      <Text style={styles.text}>Trường ĐH Sư Phạm Kỹ Thuật</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default IntroScreen;
