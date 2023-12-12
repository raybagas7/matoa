import axios from "axios";
import { ISignUp } from "../Interfaces/User";

export const postNewUser = async (signUpData: ISignUp) => {
  const { confirmpass, ...importanData } = signUpData;
  try {
    const response = await axios.post(
      "http://localhost:3000/users",
      importanData,
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
