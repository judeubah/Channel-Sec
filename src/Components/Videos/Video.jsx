import React, {useState} from 'react';
import './Video.scss';

export const Video = (props)=>{
  const [video, setVideo] = useState("");

  const handleOpen = (video) =>{
    setVideo(video);
  }
  const handleClose = (e) =>{
    const item = e.target.classList[0];
    if(item.includes('video-wall')){
    setVideo(null);
    }
    console.log(e)
  }

  return (
    <section className="Videos__section" >
      <div className ="Videos__title_container">
        <h2 className="Videos__title">{`Video Interviews`.toUpperCase()}</h2>
      </div>
      <div className="Videos__container">
        {props.Video_data.map((video, index, array)=>(
          <div className={`Video__box_container ${index % 2 ===0 && index !== array.length-1 && "Video_box_divider"}`} key={index}>  
            <div className="Video__box_image"
             onClick={()=>handleOpen(video.i_frame_src + video.id + "?autoplay=1")}
              style={{background: `linear-gradient(-180deg, transparent, #151231),url(/img/vids/${video.id}.png) `, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            </div>
            <div className="Video__box_article">
              <h3 className="Video__article_title">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {video  && (
        <div className="video-wall"  onClick={(e)=>handleClose(e)}>
          <div className="video-modal"  >
           <iframe src={video} className="video_iframe"  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen=""></iframe>
          </div>
        </div>
      )}
    </section>
  )
}