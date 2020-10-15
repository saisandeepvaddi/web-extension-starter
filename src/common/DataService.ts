import Axios, { AxiosResponse } from "axios";
import { config } from "./config";

export const DataService = {
  async getUsers() {
    const response: AxiosResponse = await Axios.get(`${config.server}/users`);
    const projects: any = response.data;
    return projects;
  },
};
