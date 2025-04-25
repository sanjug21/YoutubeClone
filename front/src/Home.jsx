import React from 'react'
import NavBar from './components/NavBar'

function Home() {
  const youtubeData=[
    {
      name: 'Funny Cats Compilation',
      src: 'http://youtube.com/watch?v=cat001'
    },
    {
      name: 'Dogs Fails 2024',
      src: 'http://youtube.com/watch?v=dogfail2024'
    },
    {
      name: 'Amazing Nature Documentary',
      src: 'http://youtube.com/watch?v=naturedoc'
    },
    {
      name: 'Best of Stand-up Comedy',
      src: 'http://youtube.com/watch?v=standupbest'
    },
    {
      name: 'DIY Home Renovation',
      src: 'http://youtube.com/watch?v=diyhome'
    },
    {
      name: 'Top 10 Music Videos',
      src: 'http://youtube.com/watch?v=music10'
    },
    {
      name: 'Gaming Highlights',
      src: 'http://youtube.com/watch?v=gameplaybest'
    },
    {
      name: 'Travel Vlog: Europe',
      src: 'http://youtube.com/watch?v=traveleurope'
    },
    {
      name: 'Delicious Recipes',
      src: 'http://youtube.com/watch?v=foodrecipes'
    },
    {
      name: 'Science Experiments',
      src: 'http://youtube.com/watch?v=sciencefun'
    },
    {
      name: 'Car Reviews',
      src: 'http://youtube.com/watch?v=carreviews'
    },
    {
      name: 'Fashion Trends',
      src: 'http://youtube.com/watch?v=fashion2024'
    },
    {
      name: 'Workout Motivation',
      src: 'http://youtube.com/watch?v=fitlife'
    },
    {
      name: 'Movie Trailers',
      src: 'http://youtube.com/watch?v=movietrailers'
    },
    {
      name: 'Tech Reviews',
      src: 'http://youtube.com/watch?v=techlatest'
    },
    {
      name: 'Art Tutorials',
      src: 'http://youtube.com/watch?v=artskills'
    },
    {
      name: 'Historical Events',
      src: 'http://youtube.com/watch?v=historylesson'
    },
    {
      name: 'Space Exploration',
      src: 'http://youtube.com/watch?v=spacejourney'
    },
    {
      name: 'Pranks Compilation',
      src: 'http://youtube.com/watch?v=pranks2024'
    },
    {
      name: 'Live Music Performance',
      src: 'http://youtube.com/watch?v=livemusicbest'
    }
  ];
  return (
    <div className='space-y-4 bg-gray-500 w-screen'>
        <NavBar />
      
            <div className='flex items-start justify-start '>
                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {youtubeData.map((video, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-lg '>
                            <iframe width="100%" height="200" src={video.src} title={video.name} frameBorder="0" allowFullScreen></iframe>
                            <h2 className='text-center text-lg font-semibold'>{video.name}</h2>
                        </div>
                    ))}
            </div>
       
    </div>
    </div>
  )
}

export default Home;