import React from 'react'

export default function MainPage() {
  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
      <p className='lg:mx-32 opacity-40 py-6'>Welcome to "Convert Your Currencies Today"! This application
        allows you to easily convert currencies based on the 
        latest exchange rates.Whether you're planning a trip.
        managing your finances , or simply curious about the 
        value of your money in different currencies this tool 
        its here to help.
      </p>
      <div className='mt-5 flex items-center justify-center flex-col'>
        <section className='w-full lg:w-1/2'>
          <form>
          <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
    <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
     focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
       dark:focus:ring-green-500 dark:focus:border-green-500"  required/>
  </div>
  <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
    <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
     focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
       dark:focus:ring-green-500 dark:focus:border-green-500"  required/>
  </div>
          </form>
        </section>
      </div>
    </div>
  )
}
