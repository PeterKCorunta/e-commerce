/**
 * The Rewind Arrow Component.
 * 
 * This component returns back a Rewind Arrow icon that uses
 * plain text SVG.
 * 
 * @returns 
 */

const RewindArrow = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 2 12 11 19 11 5"></polygon>
            <polygon points="22 5 13 12 22 19 22 5"></polygon>
            </svg>
        </div>
    );
}

export default RewindArrow;