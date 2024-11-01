import React, { useEffect, useState } from 'react';
import { MdBookmark } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Projects = () => {
  console.log("Enter Projects");

  const [filtered, setFiltered] = useState([]);
  const projects = useSelector((state) => state.users?.projects);
  const searchTerm = useSelector((state) => state.users?.searchTerm ? state.users.searchTerm : '');

  console.log("Search Term:", searchTerm);

  useEffect(() => {
    console.log("useEffect search");

    if (searchTerm?.length > 0) {
      console.log("Searching");

      const filteredProjects = projects?.filter((project) => {
        const lowerCaseItem = project?.title.toLowerCase();
        return lowerCaseItem.includes(searchTerm.toLowerCase());
      });
      console.log(filteredProjects);
      
      
      setFiltered(filteredProjects);
    } else {
      setFiltered(projects); 
    }
  }, [searchTerm, projects]);

  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {
        filtered? (
          <>
          {
            filtered && filtered.map((project,index)=>(
              <ProjectCard key={project.id} project={project} index={index}/>
            ))
          }
          </>
        ):(
          <>
          {
            projects && projects.map((project,index)=>(
              <ProjectCard key={project.id} project={project} index={index}/>
            ))
          }
          </>
        )
      }
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  console.log(project);
  
  const user = project.user;
  return (
    <div className='w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4 '>
      {/* output */}
      <div className='bg-primary w-full h-full rounded-md overflow-hidden '>
        <iframe title='Result' srcDoc={project.output} className='border-none w-full h-full'></iframe>
      </div>

      {/* profile */}
      <div className='flex items-center justify-start w-full gap-3 '>
        <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
          {user?.photoURL ? (
            <img className='w-full h-full object-cover' src={user?.photoURL} />
          ) : (
            <p className='text-white text-xl font-semibold capitalize'>{user?.email[0]}</p>
          )}
        </div>
        {/* title and name */}
        <div className='flex flex-col items-center'>
          <p className='text-primaryText text-lg capitalize'>
            {project?.title}
          </p>
          <p className='text-primaryText text-sm capitalize'>
            {user?.displayName ? user?.displayName : `${user?.email.split('@')[0]}`}
          </p>
        </div>

        <div className='cursor-pointer ml-auto active:scale-95 transition-transform duration-200 ease-in-out'>
          <MdBookmark className='text-primaryText text-3xl' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
