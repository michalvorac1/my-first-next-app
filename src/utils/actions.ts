'use server'

import { redirect } from 'next/navigation'
import prisma from './prisma'

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString()
  const brandId = formData.get('brandId')?.toString()
  const description = formData.get('description')?.toString()
  const year = Number(formData.get('year'))
  const location = formData.get('location')?.toString()
  const price = Number(formData.get('price'))
  const color = formData.get('color')?.toString()

  if (!modelId || !brandId || !description || !price) {
    return
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      year: year,
      location: location,
      price: price, 
      color: color,
    },
  })

  // redirect to Home Page (Car List)
  redirect('../')
}