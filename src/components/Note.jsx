import './scss/note.scss';

export default function Note ({ id, title, content, delBtnClick}) {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => delBtnClick(id)}>
                DELETE
            </button>
        </div>
    );
}