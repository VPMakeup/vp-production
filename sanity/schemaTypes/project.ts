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
      title: "Producer",
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
