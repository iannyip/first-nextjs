import { getSortedPostsData } from '@/app/lib/blog';
import Link from 'next/link';

export default function Page() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return (
    <>
      <section>
        <h2 className='pb-4 text-2xl'>All blog posts</h2>
        <ul>
          {allPostsData.map((blog) => (
            <li key={blog.id} className='py-2'>
              <Link href={`blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
