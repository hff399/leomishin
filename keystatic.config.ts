import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const isProd = process.env.NODE_ENV === "production";

export default config({
  storage: isProd
    ? { kind: "github", repo: { owner: "hff399", name: "leomishin" } }
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
            BarChart: block({
              label: "Bar Chart",
              schema: {
                caption: fields.text({ label: "Caption" }),
                color: fields.text({ label: "Color", defaultValue: "#171717" }),
                dataJson: fields.text({
                  label: "Data (JSON)",
                  description: 'e.g. [{"label":"Q1","value":42}]',
                  multiline: true,
                }),
              },
            }),
            LineChart: block({
              label: "Line Chart",
              schema: {
                caption: fields.text({ label: "Caption" }),
                color: fields.text({ label: "Color", defaultValue: "#171717" }),
                dataJson: fields.text({
                  label: "Data (JSON)",
                  description: 'e.g. [{"label":"Jan","value":100}]',
                  multiline: true,
                }),
              },
            }),
            PostImage: block({
              label: "Image",
              schema: {
                src: fields.text({ label: "Image URL" }),
                alt: fields.text({ label: "Alt text" }),
                caption: fields.text({ label: "Caption" }),
              },
            }),
            Callout: block({
              label: "Callout",
              schema: {
                type: fields.select({
                  label: "Type",
                  options: [
                    { label: "Info", value: "info" },
                    { label: "Warning", value: "warning" },
                    { label: "Tip", value: "tip" },
                  ],
                  defaultValue: "info",
                }),
                text: fields.text({ label: "Text", multiline: true }),
              },
            }),
            YouTubeEmbed: block({
              label: "YouTube Video",
              schema: {
                url: fields.text({ label: "YouTube URL or Video ID" }),
                caption: fields.text({ label: "Caption" }),
                mode: fields.select({
                  label: "Mode",
                  options: [
                    { label: "Embed (plays inline)", value: "embed" },
                    { label: "Redirect to YouTube", value: "redirect" },
                  ],
                  defaultValue: "embed",
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
