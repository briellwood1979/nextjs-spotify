import useSWR from 'swr';
import Song from '/components/Song'
import Title from '/components/Title'

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <>
      <section className='bg-gray-600'>
        <main className='flex items-center justify-center'>
          <Title name='"My" top tracks'/>
          <Song />
        </main>
      </section>
    </>
  );
}
