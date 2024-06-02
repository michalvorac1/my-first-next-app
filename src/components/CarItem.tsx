import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <li key={car.id} className="flex justify-between gap-x-6 py-5 my-1 px-3">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{car.brand.name} {car.model.name} {car.year}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{car.color}</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{car.price}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            {car.location}
          </p>
        </div>
      </li>
    </Link>
  )
}

export default CarItem
