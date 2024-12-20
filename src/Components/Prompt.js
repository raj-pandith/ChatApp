import React from 'react'

const Prompt = ({fetchPrompt,modifyQuestion,question}) => {
  function dualWork(e){
    fetchPrompt(e)
    let inputClear=document.querySelector("#input").value="";
  }

  return (
     <div className="form">
        <input type="text" placeholder='Enter prompt' id="input" value={question} onChange={e=>modifyQuestion(e.target.value)} required/>
        <button type="submit" onClick={(e)=>dualWork(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" className='send' fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
          </svg>
        </button>
    </div>
  )
}

export default Prompt
