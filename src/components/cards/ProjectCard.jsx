import { BiLink, BiLogoGithub } from 'react-icons/bi'

export const ProjectCard = ({title, gitLink, liveLink, imgUrl}) => {
  return (
    <div className="rounded-sm mx-w-md flex flex-col bg-transparent">
    <img src={imgUrl} alt="" className='w-auto h-72 object-cover'/>
    <div className="p-5 bg-gray-900">
      <h5 className="mb-2 text-xl text-center italic  tracking-tight text-gray-300">
        <span className="text-green-400">@</span>{title}
      </h5>
      <div className="flex flex-row justify-between mt-4">
        <a
          href={gitLink}
          target='_blank'
          className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition" rel="noreferrer"
        >
          Code
          <BiLogoGithub className="text-2xl" />
        </a>
        <a
          href={liveLink}
          target='_blank'
          className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition" rel="noreferrer"
        >
          View
          <BiLink className="text-2xl" />
        </a>
      </div>
    </div>
  </div>
  )
}
