import {defineField, defineType} from 'sanity'

export const mapType = defineType({
  name: 'map',
  title: 'Map',
  type: 'document',
  fields: [
    defineField({
      name: 'coordinatesLat',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coordinatesLng',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
})
