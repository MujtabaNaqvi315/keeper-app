import './scss/createarea.scss';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';
 
function CreateArea({ addBtnClick }) {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    const [isContentClicked, setIsContentClicked] = useState(false);

    function handleChange (e) {
        const {name, value} = e.target;
        setInputText( prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleContentClick () {
        setIsContentClicked(true)
    }

    return (
      <div>
        <form className='form create-note'>
          {isContentClicked && <input 
            name="title" 
            placeholder="Title"
            value={inputText.title}
            onChange={handleChange}
          />}
          <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows={isContentClicked ? 3 : 1}
            value={inputText.content}
            onChange={handleChange}
            onClick={handleContentClick}
          />
          <Zoom in={isContentClicked}>
            <Fab
                onClick={(e) => {
                    addBtnClick(inputText);
                    setInputText({
                        title: "",
                        content: ""
                    })
                    e.preventDefault();
                }}
            >
                <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
  
  export default CreateArea;