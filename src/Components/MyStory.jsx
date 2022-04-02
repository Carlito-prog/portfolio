import React from 'react'
import VideoPlayer from 'react-video-js-player'



const MyStory = ({url}) => {
  
 
  return (
    <section className='story-cont py-5'>
      <div className='title-cont  '>
        <div className='title-wrp d-flex justify-content-center '>
          <h3 >
            <u>
             My Story
            </u>
          </h3>
        </div>
        <div className='vid-wrp py-4'>
           <VideoPlayer
           src={url}
           width='1000'
           height='600'
           playbackRates={[0.5,1,1.5,2.5,3.0]}
           />
        </div>
        <div className='btn-wrp d-flex justify-content-center'>
        <a href="/projects" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">My Projects</a>
        </div>
      </div>
    </section>
  )
}


export default MyStory