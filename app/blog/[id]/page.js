import { getAllPostIds, getPostData } from '../../lib/blog';
import Head from 'next/head';
import Date from '../../components/date.js';

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <>
      <Head>
        {/* this isn't working; to deprioritise */}
        <title>{postData.title}</title>
      </Head>
      <article className='prose prose-base'>
        <h1 className='font-bold text-4xl mb-2'>{postData.title}</h1>
        <div className='font-thin text-gray-500 mb-8'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
