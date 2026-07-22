import { defineField, defineType } from "sanity";

export const slider = defineType({
    name: "slider",
    title: "Slider",
    type: "document",
    fields: [
        defineField({
            name: "index",
            title: "Index",
            type: "number",

            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
        }),
    ],
});