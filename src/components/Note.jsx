import './scss/note.scss';

export default function Note ({ title, content }) {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button>DELETE</button>
        </div>
    );
}