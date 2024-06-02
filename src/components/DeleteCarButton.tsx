'use client'
import { deleteCar } from '@/utils/actions'
import { Car } from '@prisma/client'

const DeleteCarButton = ({ id }: { id: String}) => {
    return (
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => deleteCar(id)}
        >
            Delete car
        </button>
      </div>
    );
  };
  
  export default DeleteCarButton