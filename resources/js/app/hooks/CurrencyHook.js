import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchCurrency = async () => {
    return request({url:'/currency/{id}'})
}

export const useCurrencyData = (onSuccess, onError) => {
    return useQuery('currency-data', fetchCurrency, {
        onSuccess,
        onError
    })
}

const addCurrency = async (data) => {
    const response = await request({
        url: 'currency/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddCurrency = () => {
    const queryClient = useQueryClient()

    return useMutation(addCurrency, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('currencies',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}