import Image from 'next/image';

export default function BlogPost({ title }: { title: string }) {
  return (
    <article className='flex h-screen items-center justify-center'>
      <div className='relative max-w-2xl overflow-hidden rounded-lg bg-white shadow-md'>
        <div className='relative h-64 w-full overflow-hidden'>
          <Image
            fill
            src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='Article'
            objectFit='cover'
          />
        </div>
        <div className='p-6'>
          <div>
            <span className='text-xs font-medium uppercase text-purple-esisar '>
              {title}
            </span>
            <a
              href='#'
              className='mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline'
              tabIndex={0}
              role='link'
            >
              I Built A Successful Blog In One Year
            </a>
            <p className='mt-2 text-sm text-gray-800 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>
          <div className='mt-4'>
            <div className='flex items-center'>
              <div className='flex items-center'>
                <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                  <Image
                    fill
                    src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
                    alt='Avatar'
                    objectFit='cover'
                  />
                </div>
                <a
                  href='#'
                  className='mx-2 font-semibold text-gray-700'
                  tabIndex={0}
                  role='link'
                >
                  Jone Doe
                </a>
              </div>
              <span className='mx-1 text-xs text-gray-600'>21 SEP 2015</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
