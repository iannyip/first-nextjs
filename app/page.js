import Link from 'next/link';
import Image from 'next/image';
import { SiCodereview, SiGithub, SiLinkedin } from 'react-icons/si';

export const socialMediaItems = () => [
  {
    icon: SiLinkedin,
    link: 'https://www.linkedin.com/in/iannyip/',
  },
  {
    icon: SiGithub,
    link: 'https://github.com/iannyip',
  },
  {
    icon: SiCodereview,
    link: 'https://github.com/iannyip/iannyip-site',
  },
];

export default function Home() {
  return (
    <>
      {/* SECTION FOR PICTURE */}
      <section>
        <header className='flex flex-col mb-11 items-center'>
          <Image
            priority
            src='/profile.jpg'
            className='rounded-full mb-5'
            height={100}
            width={100}
            alt=''
          />
          <h1 className={`text-4xl`}>Ian Yip</h1>
        </header>
      </section>

      {/* SECTION FOR BLURB */}
      <section className='text-lg/10 my-10'>
        <p>Hi, I&apos;m Ian 👋</p>
        <p>I build stuff on this page.</p>
      </section>

      {/* SECTION FOR SOCIAL MEDIA */}
      <section className='flex justify-center'>
        {socialMediaItems().map((item, index) => (
          <Link href={item.link} key={`${index}`} target='_blank' className=''>
            <div className='p-3 m-3 rounded-full cursor-pointer shadow-sm shadow-gray-400 cursor-ponter hover:scale-110 duration-300 ease-in bg-white border-black  dark:text-white dark:bg-black dark:border dark:border-white'>
              {<item.icon />}
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
