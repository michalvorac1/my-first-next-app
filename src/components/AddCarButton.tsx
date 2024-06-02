'use client'
import Link from 'next/link'

const AddCarButton = () => {
    return (
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/car/new" passHref>
          <button 
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Add new car
          </button>
        </Link>
      </div>
    );
  };
  
  export default AddCarButton