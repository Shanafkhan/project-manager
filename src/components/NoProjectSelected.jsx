import noProjectImage from '../assets/no-projects.png'
export default function NoProjectSelected(){
    return(
        <div>
            <img src={noProjectImage} alt="An empty project list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project to get started</p>
            <p className='mt-8'>
                <button>
                    Create a new Project
                </button>
            </p>
        </div>
    );
}