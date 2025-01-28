import { Timestamp } from "firebase/firestore"

export const useFormatDate = () => {
    const formatDate = (date) => {
        const timestamp = new Timestamp(date.seconds, date.nanoseconds)
            return new Date(timestamp.toDate()).toISOString("pt-BR").split("T")[0]
    }

    return formatDate
}