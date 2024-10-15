import React, { useEffect } from 'react'
import NavBar from './Components/NavBar.js'
import Prompt from './Components/Prompt.js'
import axios from 'axios'
import { useState } from 'react'
import "./App.css"

const ChatApp = () => {

    let [question,setQuestion]=useState("");
    let [ans,setAns]=useState("");

    async function fetchPrompt(){
        addMessage(true);
      try{
          const fetchContent=await axios({
              url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+process.env.REACT_APP_CHATAPP_API,
              method:"post",
              data:{contents:[{parts:[{text:question}]}]}
            })
            
               let  respond=fetchContent.data.candidates[0].content.parts[0].text;
                   ans = respond.replaceAll('*', ''); 
                   ans = ans.replaceAll('#', ''); 
                 setAns(ans);
                 
                }catch(err){

                    setAns(err.message +": please check the internet connection ! ");
       }
    }

    
  useEffect(() => {
        if (ans) {
            addMessage(false);
        }
    }, [ans]); 



    function addMessage(isUser){

        let container=document.querySelector(".msg-container");
        let div=document.createElement('div');
        let p=document.createElement('p');
        let boldiv=document.createElement('div');
        if(isUser){
            boldiv.classList.add('right-boll')
            div.classList.add('right-text')
            p.innerText=question;
        }else{
            boldiv.classList.add('left-boll')
            div.classList.add('left-text')
            p.innerText=ans;
        }
        div.appendChild(boldiv);
        div.appendChild(p);
        container.appendChild(div);
        console.log(container)
    }
    

  return (
    <div className='container'>
        <NavBar/>
            <div className='msg-container'>
                <div className='left-text'>
                    <div class='left-boll'></div>
                    <p>Hi there!,how can i help you today?</p>
                 </div>
                {/* just for reference */}
                 {/* <div className='left-text'>
                    <div class='left-boll'></div>
                    <p>chat from ai </p>
                 </div>
                 <div className='right-text'>
                    <div class='right-boll'></div>
                    <p>my side </p>
                 </div> */
                 }

            </div>
        <Prompt fetchPrompt={fetchPrompt} modifyQuestion={setQuestion}/>
      
    </div>
  )
}

export default ChatApp
