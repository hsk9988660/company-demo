const Appointments = () => {
  return (
    <div className='my-16 relative relative  block p-6 bg-white  rounded-lg shadow  dark:bg-gray-800 '>
      <div className='text-2xl font-bold mb-8'>
        Recent Appointments
      </div>
       <div className="relative overflow-x-autoshadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left">
        <thead className="text-md text-gray-3  bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Service
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee
                </th>
                <th scope="col" className="px-6 py-3">
                    Sale
                </th>
                <th scope="col" className="px-6 py-3">
                    Earnings
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b   border-gray-200 dark:bg-gray-800 dark:border-gray-700">
               <td className='p-4'>
               <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 services
                        </p>
                    </div>
                </div>
               </td >
                <td className="px-6 p-4">
                Itrar Zaidi
                </td>
                <td className="px-6 p-4">
                    01
                </td>
                <td className="px-6 p-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <td className='p-4'>
               <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 services
                        </p>
                    </div>
                </div>
               </td >
                <td className="px-6 p-4">
                Itrar Zaidi
                </td>
                <td className="px-6 p-4">
                   01
                </td>
                <td className="px-6 p-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white border-b border-gray-200 dark:bg-gray-800">
            <td className='p-4'>
               <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 services
                        </p>
                    </div>
                </div>
               </td >
                <td className="px-6 p-4">
                Itrar Zaidi
                </td>
                <td className="px-6 p-4">
                    01
                </td>
                <td className="px-6 p-4">
                    $99
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
            <td className='p-4'>
               <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 services
                        </p>
                    </div>
                </div>
               </td >
                <td className="px-6 p-4">
                Itrar Zaidi
                </td>
                <td className="px-6 p-4">
                    01
                </td>
                <td className="px-6 p-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Appointments;