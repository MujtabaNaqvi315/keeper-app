import './footer.css';

export default function Footer () {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='footer'>
            <p>Copyright ⓒ {year}</p>
        </div>
    );
}