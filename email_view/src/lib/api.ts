import axios from "axios";

export type EmailType = {
    id: string,
    from: {
        email: string,
        name: string
    }
    date: number
    subject: string
    short_description: string
}


export async function getEmailData(page: string) {
    try {
        const { data } = await axios.get<{ list: EmailType[], total: number }>(`https://flipkart-email-mock.vercel.app/?page=${page}`)
        const x=data.list.slice(0,1)
        return { data: [...data.list.slice(1),...x], total: data.total }
    } catch (error) {
        console.error("error while fetching the email data" + error)
    }
}

export async function getIndivitualEmailData(id: string) {
    try {
        const { data } = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`)
        return data
    } catch (error) {
        console.error("error while fetching the indivitual email data" + error)
    }
}