import { create } from 'zustand'

type EmailType = {
    emailData: {
        name: string,
        date: number,
        emailID: string,
        subject:string
    }
    changeEmailData: ({ name, date, emailID,subject }: { name: string, date: number, emailID: string,subject:string }) => void
}

type PageType = {
    page: string,
    changePage: (page: string) => void
}

type FilterType = {
    filter: 'Unread' | 'Read' | 'Favorites'
    changeFilter: (filter: 'Unread' | 'Read' | 'Favorites') => void
}

export const useEmail = create<EmailType>((set) => ({
    emailData: { name: '', date: 0, emailID: '',subject:'' },
    changeEmailData: ({ name, date, emailID,subject }: { name: string, date: number, emailID: string,subject:string }) => set({ emailData: { name, date, emailID,subject } })
}))

export const usePage = create<PageType>((set) => ({
    page: "1",
    changePage: (page: string) => set({ page: page })
}))

export const useFilter = create<FilterType>((set) => ({
    filter: 'Unread',
    changeFilter: (filter: 'Unread' | 'Read' | 'Favorites') => set({ filter })
}))