'use client'
import { invalid } from 'moment'
import React from 'react'
import {
    useForm,
    SubmitHandler
} from 'react-hook-form'

type Input ={ 
    locations: string
}

const Forms = () => {

    const {register,
        handleSubmit, 
        formState: {errors}
    } = useForm<Input>({
        defaultValues: {
            locations: 'Test'
        }
    })
    const processForm : SubmitHandler<Input> = async (data) => {
        console.log(data)
        // try{
        // await saveLocation(data.locations)
        // reset()
        // } catch (error){
        //     console.log(error); 
        // }

    }
 
  return (
    <main className='min-h-screen flex justify-center items-start'>
        <form onSubmit={handleSubmit(processForm)}>
            <div>
                <input className='text-slate-950' type="text" placeholder='Name' {...register('locations', {
                    required: 'This is required',
                    minLength: {value: 2, message: 'Min length is 2'},
                    maxLength: {value: 20, message: 'Max length is 20'}
                })} aria-invalid={errors.locations ? 'true' : 'false'} 
                />
                {
                    errors.locations && <div className='text-red-500'>{errors.locations.message}</div>
                }
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
   
    </main>
  )
}

export default Forms