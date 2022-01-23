import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchJournal = async () => {
    return request({url:'/journal/5'})
}

export const useTransactionData = (onSuccess, onError) => {
    return useQuery('transaction-data', fetchJournal, {
        onSuccess,
        onError
    })
}

const addTransaction = async (data) => {
    const response = await request({
        url: 'journal/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddTransaction = () => {
    const queryClient = useQueryClient()

    return useMutation(addTransaction, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('journals',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}