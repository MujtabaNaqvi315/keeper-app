import './scss/createarea.scss';
import { useState } from 'react';
 
function CreateArea({ addBtnClick }) {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange (e) {
        const {name, value} = e.target;
        setInputText( prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
      <div>
        <form className='form'>
          <input 
            name="title" 
            placeholder="Title"
            value={inputText.title}
            onChange={handleChange}
          />
          <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            value={inputText.content}
            onChange={handleChange}
          />
          <button
            onClick={(e) => {
                addBtnClick(inputText);
                setInputText({
                    title: "",
                    content: ""
                })
                e.preventDefault();
            }}
          >
            Add
        </button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;