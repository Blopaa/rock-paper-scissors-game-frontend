import io from "socket.io-client"

export const connectSocket = (endpoint: string = "http://localhost:5000") => {
  const socket = io.connect(endpoint)
  return socket
}