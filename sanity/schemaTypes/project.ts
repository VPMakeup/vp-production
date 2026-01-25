import { defineType, defineField, defineArrayMember } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleImage",
      title: "Title Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "projectImages",
      title: "Project Images",
      description: "Additional images for the project gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),

    // ✅ NEW: Editorial body
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "embedUrl",
      title: "Embed URL",
      type: "url",
    }),

    // ✅ NEW: Sidebar metadata
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "photographer",
      title: "Photographer",
      type: "string",
    }),
    defineField({
      name: "producer",
      title: "Production",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
