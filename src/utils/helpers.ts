import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUser = async (userData: object) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
        console.log("Error setting user data", error.message);
    }
  }
  
  export const getUser = async () => {
    try {
        let user = await AsyncStorage.getItem("user")
        return JSON.parse(user);
    } catch (error) {
        return error;
    }
  }
  
  export const clearData = async () => {
    try {
        const key = 'user';
        await AsyncStorage.removeItem(key);
    } catch (error) {
        return error;
    }
  }
  