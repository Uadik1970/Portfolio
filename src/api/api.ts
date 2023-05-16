import axios from "axios"
import { FormikErrorType } from "../contacts/Contacts"


// export const messagesApi = {
//     sendMessage(formData: FormikErrorType) {
//         return axios.post("http://localhost:3010/sendMessage", formData)
//     }
// }
export const messagesApi = {
    sendMessage(formData: FormikErrorType) {
        return axios.post("https://google-nodejs.vercel.app/sendMessage", formData)
    }
}