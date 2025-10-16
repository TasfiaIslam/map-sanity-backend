import {defineField, defineType} from 'sanity'

export const mapType = defineType({
  name: 'map',
  title: 'Map',
  type: 'document',
  fields: [
    defineField({
      name: 'streetId',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hash',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
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
    defineField({
      name: 'municipalityName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'boroughName',
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subareaName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'postalCode',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'streetName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'streetLetter',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'streetNumber',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hasLiveSales',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isLiveSalesApproved',
      type: 'boolean',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'unitType',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'adStates',
      type: 'array', // type is always "array"
      of: [{type: 'string'}], // array of strings
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'marketStates',
      type: 'array', // type is always "array"
      of: [{type: 'string'}], // array of strings
      validation: (rule) => rule.required(),
    }),
  ],
})

// "streetId": "2272976",
// "hash": "790c276d796dbfbe560b8ac3c0c9e9aa",
// "coordinatesLat": 59.9380172714686,
// "coordinatesLng": 10.7569805305833,
// "municipalityName": "Oslo",
// "boroughName": "Sagene",
// "subareaName": "Sagene",
// "postalCode": "0465",
// "streetName": "Bentsegata",
// "streetNumber": "2",
// "streetLetter": null,
// "slug": "bentsegata-2",
// "unitType": "building",
// "hasLiveSales": false,
// "isLiveSalesApproved": false,
// "adStates": ["sold", null],
// "marketStates": ["pending"]
