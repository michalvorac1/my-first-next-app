import CarItem from './CarItem'
import { CarWithDeps } from '@/types/prismaTypes'

type Props = {
  cars: CarWithDeps[]
}

const CarList = ({ cars }: Props) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  )
}

export default CarList
