import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchIndustry = async () => {
    return request({url:'/industry'})
}

export const useIndustryData = (onSuccess, onError) => {
    return useQuery('industry-data', fetchIndustry, {
        onSuccess,
        onError
    })
}

const addIndustry = async (data) => {
    const response = await request({
        url: 'industry/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddIndustry = () => {
    const queryClient = useQueryClient()

    return useMutation(addIndustry, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('industry',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}