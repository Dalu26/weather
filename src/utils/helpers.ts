import AsyncStorage from "@react-native-async-storage/async-storage";
import network from "./network";
import { API_KEY } from "./config";
import axios from "axios";

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
  
export const getWeatherInfo = (
    location, 
    fields, 
    startTime, 
    endTime,
    timesteps,
    units,
    timezone
) => {
    return new Promise((resolve, reject) => {
        network.get(`apikey=KGs3wEraUXci716E1wJFzIsPEuIEpYPv&location=${location}&fields=${fields}&startTime=${startTime}&endTime=${endTime}&timesteps=${timesteps}&units=${units}&timezone=${timezone}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}
