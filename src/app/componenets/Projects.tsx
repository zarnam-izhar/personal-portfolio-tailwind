import React from 'react'
import Heading from './Heading'
import Cards from './Cards'
const data =[
    {
        id: 0,
        title:' Static Resume',
        desc: 'A perosnal static resume perfect for job applications ',
        img: '/resume2.jpeg',
        tags: ['CSS', 'Html']
    },
    {
        id: 1,
        title:' Shareable Resume Builder',
        desc: ' A simple Html and CSS based resume builder that is also shareable',
        img: '/resume.jpeg',
        tags: ['CSS', 'Html']
    },
    {
        id: 3,
        title:'Bakery Webiste',
        desc: 'A nextjs project showing a working bakery website',
        img: '/bakery.jpeg',
        tags: ['Nextjs','React', 'Tailwind']
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Cards
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
