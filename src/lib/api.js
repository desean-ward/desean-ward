import axios from "axios"

export const sendContactForm = async (data) => fetch('/api/contact/', {
    method: 'POST',
    body: data,
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
   // }
})