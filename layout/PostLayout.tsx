import Link from "next/link"
import { Post, allPosts } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

import { mdxButton } from "@/components/mdx"

async function PostCard(post: Post) {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <article className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url}>
          <div className="text-blue-700 hover:text-blue-900 dark:text-blue-400">{post.title}</div>
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm space-y-3" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <MDXContent components={{ Button: mdxButton }} />
    </article>
  )
}
export default function PostLayout(props: any) {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div {...props}>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}