'use client'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { projectData } from '@/src/utils/ProjectData';
import Image from 'next/image';
const Project = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div>
      <div className='border-b mb-3'>
        <div className="relative my-5">
          <p className="first-letter:text-[#ff6a00]  text-xl font-semibold">
            Projects
          </p>
          <div className=" absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] " />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-x-3'>
        {
          projectData.map(project => (
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              key={project.link}
            >
              {
                project.image.map((img, index) => (
                  <a href={img} key={img} className={`${index === 0 ? 'block' : 'hidden'} group border hover:shadow-[#f7d9a29d] transition-all shadow-lg rounded-md my-2 p-2`}>
                    <Image
                      alt={project.title}
                      className={` group-hover:scale-105 h-40 w-[300px] shadow-sm border-l hover:border-[#F6B846] rounded-md  object-contain transition-all`}
                      height={500}
                      src={img}
                      width={600}
                    />
                    <p className="text-xl mt-2 font-semibold">{project.title}</p>
                  </a>
                ))

                // <a href={project.image}>
                //   <img alt={project.title} src={project.image} />
                // </a>
              }
            </LightGallery>

          ))
        }
      </div>
    </div>
  )
};

export default Project;
