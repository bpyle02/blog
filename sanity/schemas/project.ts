import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      }),
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'projectType',
        title: 'Project Type',
        type: 'string',
        options: {
            list: [
                {value: 'Personal', title: 'Personal'},
                {value: 'Client', title: 'Client'},
                {value: 'School', title: 'School'},
                {value: 'Professional', title: 'Professional'}
            ]
        }
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'datetime',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
          name: 'code',
          title: 'Code Link',
          type: 'url'
      }),
      defineField({
          name: 'demo',
          title: 'Live Demo Link',
          type: 'url'
      }),
      defineField({
          name: 'tags',
          type: 'array',
          of: [{ type: 'string'}],
          options: {
              layout: 'tags'
          }
      })
    ],
})