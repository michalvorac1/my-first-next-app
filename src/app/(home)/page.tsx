import CarList from '@/components/CarList'
import prisma from '@/utils/prisma'

const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

const HomePage = async () => {
  const cars = await getCars()

  return (
    <div className="container mx-auto px-40">
      Home Page
      <CarList cars={cars} />
    </div>
  )
}

export default HomePage
