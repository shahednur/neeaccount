import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchRegion = async () => {
    return request({url:'/regions'})
}

export const useRegionData = (onSuccess, onError) => {
    return useQuery('region-data', fetchRegion, {
        onSuccess,
        onError
    })
}

const addRegion = async (data) => {
    const response = await request({
        url: '/regions/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddRegion = () => {
    const queryClient = useQueryClient()

    return useMutation(addRegion, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('regions',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}