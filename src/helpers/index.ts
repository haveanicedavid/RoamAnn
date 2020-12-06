import { format } from 'date-fns'

export const dailyNoteDate = () => format(new Date(), 'M-d-yyyy')
