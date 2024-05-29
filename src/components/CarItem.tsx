import { CarWithDeps } from '@/types/prismaTypes'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return <div>{car.model.name}</div>
}

export default CarItem
