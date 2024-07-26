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
        <form onSubmit={e => { e.preventDefault(); }} className='form create-note'>
          {isContentClicked && <input 
            name="title" 
            placeholder="Title"
            value={inputText.title}
            onChange={handleChange}
            onKeyDown={e => {
              if (e.key === "Enter"){
                addBtnClick(inputText);
                setInputText({
                    title: "",
                    content: ""
                })
              }
            }}
          />}
          <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows={isContentClicked ? 3 : 1}
            value={inputText.content}
            onChange={handleChange}
            onClick={handleContentClick}
            onKeyDown={e => {
              if (e.key === "Enter" && e.shiftKey){
                console.log("Enter + Shift pressed");
                setInputText(prevValue => {
                  console.log("Previous content:", prevValue.content);
                  const newContent = prevValue.content + "\n";
                  console.log("New content:", newContent);
                  return {
                    ...prevValue,
                    content: inputText.content + "\n"
                  }
                })
              } 
              else if (e.key === "Enter"){
                console.log("Enter pressed, preventing default");
                e.preventDefault();
                addBtnClick(inputText);
                setInputText({
                    title: "",
                    content: ""
                })
              }
            }}
          />
          <Zoom in={isContentClicked}>
            <Fab
                onClick={() => {
                    addBtnClick(inputText);
                    setInputText({
                        title: "",
                        content: ""
                    })
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