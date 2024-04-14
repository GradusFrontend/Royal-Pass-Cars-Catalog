import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    try {
        const res = await axios.get(BASE_URL + path)

        return res
    } catch (e) {
        alert(e.message)
    }
}