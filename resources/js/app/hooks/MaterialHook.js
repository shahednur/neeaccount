import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchMaterial = async () => {
    return request({url:'/materials'})
}

export const useCustomerData = (onSuccess, onError) => {
    return useQuery('material-data',fetchMaterial,{
        onSuccess,
        onError
    })
}
const addMaterial = async (data) => {
    const response = await request({
        url: '/material/new',
        method: 'POST',
        data
    })
    return response.data
}

export const useAddMaterial = () => {
    const queryClient = useQueryClient()

    return useMutation(addMaterial, {
        onSuccess: (data) => {
            queryClient.cache.setQueryData('materials', data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
