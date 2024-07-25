import './scss/header.scss';
import HighlightIcon from '@mui/icons-material/Highlight';

export default function Header() {
    return (
        <div className='header'>
            <h1>
                <HighlightIcon />
                Keeper
            </h1>
        </div>
    );
}