import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
        name: 'text',
        type: 'text',
        readOnly: true,
    }),
    defineField({
        name: 'post',
        type: 'reference',
        to: [
            {
                type: 'post'
            }
        ]
    }),
    defineField({
      name: 'project',
      type: 'reference',
      to: [
          {
              type: 'project'
          }
      ]
  })
  ],
})
