import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios'

const fetchCountry = async () => {
    return request({url:'/countries'})
}

export const useCountryData = (onSuccess, onError) => {
    return useQuery('country-data', fetchCountry, {
        onSuccess,
        onError
    })
}

const addCountry = async (data) => {
    const response = await request({
        url: '/countries/new',
        method:'POST',
        data
    })
    return response.data
}

export const useAddCountry = () => {
    const queryClient = useQueryClient()

    return useMutation(addCountry, {
        onSuccess:(data)=>{
            queryClient.cache.setQueryData('countries',data)
        },
        onError: (error)=>{
            console.log(error)
        }
    })
}