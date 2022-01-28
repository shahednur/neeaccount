import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchCustomer = async () => {
    return request({url:'/customers'})
}

export const useCustomerData = (onSuccess, onError) => {
    return useQuery('customer-data',fetchCustomer,{
        onSuccess,
        onError
    })
}
const addCustomer = async (data) => {
    const response = await request({
        url: '/customer/new',
        method: 'POST',
        data
    })
    return response.data
}

export const useAddCustomer = () => {
    const queryClient = useQueryClient()

    return useMutation(addCustomer, {
        onSuccess: (data) => {
            queryClient.cache.setQueryData('customers', data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
