import './Button.css'

export default function Button({ placeholder, link }) {
  return (
    <a target="_blank" className='button' href={link}>
      {placeholder}
    </a>
  );
};