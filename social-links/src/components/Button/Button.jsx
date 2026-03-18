import './Button.css'

export default function Button({ placeholder, link }) {
  return (
    <a href={link}>{placeholder}</a>
  );
};