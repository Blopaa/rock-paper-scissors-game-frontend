import {apiConfig as api} from "./config"

export const signUp = (data: {}) => {
  api.post("/auth/", data)
}