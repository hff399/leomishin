import { config, fields, collection, component } from "@keystatic/core";

const isProd = process.env.NODE_ENV === "production";

export default config({
  storage: isProd
    ? {
        kind: "github",
        repo: { owner: "hff399", name: "leomishin" },
      }
    : { kind: "local" },
  ui: {
    brand: { name: "Leo Mishin" },
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "One-line hook shown in the post list and SEO.",
          multiline: true,
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Thoughts", value: "Thoughts" },
            { label: "Essays", value: "Essays" },
            { label: "Biz Takes", value: "Biz Takes" },
            { label: "Market Predictions", value: "Market Predictions" },
          ],
          defaultValue: "Thoughts",
        }),
        date: fields.date({ label: "Date" }),
        content: fields.mdx({
          label: "Content",
          components: {
            BarChart: component({
              label: "Bar Chart",
              schema: {
                caption: fields.text({ label: "Caption" }),
                color: fields.text({ label: "Color", defaultValue: "#171717" }),
                data: fields.array(
                  fields.object({
                    label: fields.text({ label: "Label" }),
                    value: fields.number({ label: "Value" }),
                  }),
                  { label: "Data", itemLabel: (props) => props.fields.label.value }
                ),
              },
              preview: () => null,
            }),
          },
        }),
      },
    }),
  },
});
