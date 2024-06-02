import NewCarForm from '@/components/NewCarForm'
import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className="container mx-auto px-40">
      <Link href={'/'}>Back to list</Link>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Add a car</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Insert details about new car.</p>
      </div>
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage
