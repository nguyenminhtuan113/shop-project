import { Toaster } from "react-hot-toast"
import { RoutersApp } from "./routers/RoutersApp"
import './App.css'
import NotificationSale from "./components/notification/NotificationSale"

function App() {

  return (
    <>
      <Toaster />
      <NotificationSale />
      <RoutersApp />
    </>

  )
}

export default App
