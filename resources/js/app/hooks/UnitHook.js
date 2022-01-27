import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchUnit = async () => {
    return request({url:'/units'})
}

export const useUnitData = (onSuccess, onError) => {
    return useQuery('unit-data', fetchUnit, {
        onSuccess,
        onError
    })
}

const addUnit = async (data) => {
    const response = await request({
        url: 'units/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddUnit = () => {
    const queryClient = useQueryClient()

    return useMutation(addUnit, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('units',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}