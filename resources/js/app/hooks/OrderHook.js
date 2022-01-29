import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchOrder = async () => {
    return request({url:'/orders'})
}

export const useOrderData = (onSuccess, onError) => {
    return useQuery('order-data',fetchOrder,{
        onSuccess,
        onError
    })
}
const addOrder = async (data) => {
    const response = await request({
        url: '/order/new',
        method: 'POST',
        data
    })
    return response.data
}

export const useAddOrder = () => {
    const queryClient = useQueryClient()

    return useMutation(addOrder, {
        onSuccess: (data) => {
            queryClient.cache.setQueryData('orders', data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
