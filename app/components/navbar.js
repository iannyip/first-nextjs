'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navMenuItems = () => [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
];

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  } else if (pathname.includes('/projects/')) {
    pathname = '/projects';
  }

  return (
    <>
      <section className='flex justify-center mb-16'>
        {navMenuItems().map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={`mx-2 text-sm text-gray-500 hover:text-gray-700 duration-300 
              ${
                pathname === item.link
                  ? 'underline underline-offset-8 text-gray-800'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </section>
      {/* <p className='text-center mb-10'>Current pathname: {pathname}</p> */}
    </>
  );
}
