import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchConf = async () => {
    return request({url:'/accounts/5'})
}

export const useConfData = (onSuccess, onError) => {
    return useQuery('conf-data',fetchConf,{
        onSuccess,
        onError
    })
}
const addConf = async (data) => {
    const response = await request({
        url: 'accounts/new',
        method: 'POST',
        data
    })
    return response.data
}

export const useAddConf = () => {
    const queryClient = useQueryClient()

    return useMutation(addConf, {
        onSuccess: (data) => {
            queryClient.cache.setQueryData('accounts', data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
