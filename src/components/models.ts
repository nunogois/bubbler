export interface Todo {
  id: number
  content: string
}

export interface Meta {
  totalCount: number
}

export interface Contact {
  id: number
  name: string
  image: string
}

export interface Message {
  id: number
  text: string
  date: number
  from: Contact
  to: Contact
}

export interface ChatPreview {
  contact: Contact
  message: Message
}
