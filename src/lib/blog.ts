import { createZenblogClient } from "zenblog";

export const zenblog = createZenblogClient({
  blogId: import.meta.env.ZENBLOG_BLOG_ID!,
})
