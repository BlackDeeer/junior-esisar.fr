import BlogPost from '@/components/BlogPost';

export default function Blog() {
  const posts = ['Post 1', 'Post 2', 'Post 3'];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Blog</h1>
      {posts.map((post) => (
        <BlogPost key={post} title={post} />
      ))}
    </main>
  );
}
