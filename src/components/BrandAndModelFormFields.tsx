'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  const [brandId, setBrandId] = useState('')

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  return (
    <Fragment>
      <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
        Brand
      </label>

      <select
        name="brandId"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        required={true}
        id=""
        value={brandId}
        onChange={(e) => {
          setBrandId(e.target.value)
        }}
      >
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
        Model
      </label>

      <select 
        name="modelId" 
        required={true}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >    
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  )
}

export default BrandAndModelFormFields
