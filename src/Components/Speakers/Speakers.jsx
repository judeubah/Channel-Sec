import React, { useState} from 'react';
import './speakers.scss';
export function Speakers(props) {
  const data = props.data
  const [filtered, setFiltered] = useState(data);
  const [speaker, setSpeaker] = useState({});
  const [potentialMatches, setPotentialMatches] = useState([]);
  const handleClose = (event)=>{
    // consolevent.log(event)
    const item = event.target.classList[0];
    if(item.includes('speaker-modal-wall')){    
      document.getElementsByClassName('j')[0].style.opacity='0';
      const slow_down = setTimeout(close_popup, 700)
    }else{
      return
    }
  }
 
const close_popup = () =>{
  setSpeaker({});
} 

const show_popup = () =>{
  document.getElementsByClassName('speaker-modal-wall')[0].style.opacity='1'
}
const handleOpen =  (person) =>{
    if(typeof person !== "object"){
      return;
    }
    setSpeaker(person);
    const slow_down = setTimeout(show_popup, 50);
  }


const find_matches = (input="", correctSpelling="", person={}) =>{
  let potentials =[];
  let split_input = [...input];
  let split_correct = [...correctSpelling];
  let allowance;

  const matrix = Array(split_correct.length+1).fill(null).map(()=>{
   return Array(split_input.length+1).fill(null);
  })
  //we make the x_axis as long as the correct spelling
  //we make the y_axis as long as the incorrect spelling (input)

  
  for (let y_axis =0; y_axis <= split_input.length; y_axis++){
    matrix[0][y_axis] = 0;
    //the y_axis is as long as split_input so the iterator can only
    //go that long
  }
  for (let x_axis =0; x_axis <= split_correct.length; x_axis++){
    matrix[x_axis][0] = 0
    //the x axis is as long as the correct_spelling and so the 
    //iterator must be as long as that
  }

  let longest_substring = -Infinity;  
  for (let x_cord = 1; x_cord <= split_correct.length; x_cord ++){
    for (let y_cord = 1; y_cord <= split_input.length; y_cord++){
      if (input[y_cord-1]===correctSpelling[x_cord-1]){
        
        matrix[x_cord][y_cord] = matrix[x_cord-1][y_cord-1] +1;
        
      }
      else{
        matrix[x_cord][y_cord] = 0
      }
      if(matrix[x_cord][y_cord] > longest_substring){ 
        longest_substring = matrix[x_cord][y_cord];
      }
      
    } 
  }   

 correctSpelling.length <= 3 ? allowance = 1 : allowance = 2; 

 if(correctSpelling.length - longest_substring <= allowance  && Math.abs(input.length - longest_substring) <=allowance){
   potentials.push(person)
   
   return potentials
 }else{
   return potentials
 }
}
  const handle_search = (event) =>{
    
    let input = event.target.value;
    let _filtered = data.filter(speaker=>speaker.name.toLowerCase().includes(input.toLowerCase()));
    let filler;
    const parent = document.getElementById("keynotes__container");
    const child = document.getElementById("keynotes__container").children[0]
    const style = child.currentStyle || window.getComputedStyle(child);
    const margin_of_child = parseInt(style.marginLeft) * 2;
    const speaker_size = child.clientWidth + margin_of_child;
    const blank_space =  (child.offsetLeft - (margin_of_child/2)) - parent.offsetLeft;
    const section_size = parent.clientWidth - blank_space;
    let fits_in_screen = Math.round(section_size / speaker_size);
    fits_in_screen = fits_in_screen  > 1 ? fits_in_screen *= 2 : fits_in_screen
    if (_filtered.length < fits_in_screen ){
      filler = Array(fits_in_screen - _filtered.length).fill(1);
      _filtered.push(...filler)
      if(_filtered[0] === 1){
        _filtered = []
      }
    }
    setFiltered(_filtered); 
    if (_filtered.length < 1 ){
      if (input.includes(' ')){//multi-word-input              
        let matches =[]; 
        let keys =[];
        let args = input.toLowerCase().split(' ');
        args = args.filter(arg=> arg !==''); 
        const [firstInput, lastInput] = args;           
        data.forEach(speaker =>{
        const [firstName, lastName] = speaker.name.toLowerCase().split(' ');
        const firstMatches = find_matches(firstInput, firstName, speaker);
        const lastMatches = find_matches(lastInput, lastName, speaker);
        if(firstMatches.length){
        firstMatches.forEach(person => {
          if(!keys.includes(person.key)){
            matches.push(person)
          }
          keys.push(person.key)
        })                
      }
        if(lastMatches.length){
        lastMatches.forEach(person => {
          if(!keys.includes(person.key)){
            matches.push(person)
          }
          keys.push(person.key)
        })    
      }  

        })        
        setPotentialMatches(matches)        
       
      }
      else{ //for mono-word input
        let matches =[]; 
        let keys =[];
        data.forEach(speaker =>{
          const [firstName, lastName] = speaker.name.toLowerCase().split(' ');
          const firstMatches = find_matches(input, firstName, speaker);
          const lastMatches = find_matches(input, lastName, speaker);
           if(firstMatches.length){
        firstMatches.forEach(person => {
          if(!keys.includes(person.key)){
            matches.push(person)
          }
          keys.push(person.key)
        })        
      }
        if(lastMatches.length){
        lastMatches.forEach(person => {
          if(!keys.includes(person.key)){
            matches.push(person)
          }
          keys.push(person.key)
        })    
      }   
        })
        
        setPotentialMatches(matches)   
      }
    }
    
    else{
      setPotentialMatches([])
    }
  }
  //this function will search for last name on the second input argument
  //bear this in mind
 

   
  return (
    <div className='Speakers__container' id={`${props.title.split(' ')[0]}-container`}>
      <h2 className="page__title">{props.title}</h2>
      {data.length > 6 && (
        <input className="Speakers_search_bar"
        type="search"
        onChange={handle_search}
        placeholder={`Search ${props.title.split(' ')[0]}`}
        autoFocus = {false}
        />
      )}
      <div className="keynotes__container" id="keynotes__container">

        {filtered.map((keynote)=>(
          
          
           <div key={keynote.key} className="keynote-speaker">
          <div className={`speaker-image__container ${typeof keynote !== "object" ? "hollow-speaker" : ""}`} 
           onClick={()=>handleOpen(keynote)}  style={{ backgroundImage:`${typeof keynote !== 'object' ? "linear-gradient(45deg, transparent, #151231,#0b0a1a, transparent)" : `url(/img/speakers/${keynote.image_src})`}` }}>
          </div>
          <h3 className="speaker-name"> {keynote.name && keynote.name.toUpperCase()}
          </h3>
          <p className="speaker-profession">{keynote.profession}
          </p>
        </div>
        
        ))}
        {potentialMatches.length === 0 && filtered.length < 1 && (
          <div className="Speakers__noresults_container">
          Sorry, no {props.title.split(' ')[0].toLowerCase()} by that name!
           </div>          
        )}
        {potentialMatches && potentialMatches.length > 0 &&(
            <>
           <p>Did you mean:</p>
          {potentialMatches.map((keynote)=>(
           <div key={keynote.key} className="keynote-speaker">
            <div className="speaker-image__container" onClick={()=>handleOpen(keynote)}
             style={{ backgroundImage: `url(/img/speakers/${keynote.image_src})` }}>
            </div>
            <h3 className="speaker-name"> {keynote.name.toUpperCase()}
            </h3>
            <p className="speaker-profession">{keynote.profession}
            </p>
            </div>
        
        ))}
        </>
          )}

         
       </div>  

          {speaker.bio &&  (
            <div className="speaker-modal-wall"  onClick={handleClose}>
            <div className="speaker-modal">
             <div className="speaker-modal-image" style={{ backgroundImage: `url(/img/speakers/${speaker.image_src})` }}></div>
             <h3 className="speaker-modal-title">{speaker.name}</h3>
            <p className="speaker-modal-profession">{speaker.profession}</p>
             <div className="speaker-modal-bio">
              {speaker.bio.map((paragraph)=>(
                <p key={Math.random()* 99} className="speaker-bio-paragraph">{paragraph}</p>
              ))}
              </div>
            </div>
            </div>
            
           )
           }
           

           
    </div>
  );
}