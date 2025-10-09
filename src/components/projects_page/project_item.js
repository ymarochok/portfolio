export default function Project_item(props) {

    const {title, content, media_path, github_link} = (props);

    return <>
            <div className='project_item'>
                <div className='project_text'>
                    <p className='title'>{title}</p>
                    <span className='description'>{content}</span>
                    <a href={github_link}>Check this on my github)</a>
                </div>
                
                <img 
                    src={media_path} 
                    alt="project_img" 
                    />
            </div>
    </>
}