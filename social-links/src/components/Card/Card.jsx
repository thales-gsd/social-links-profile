import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import './Card.css'

const links = [
  {placeholder: "GitHub", link: "https://github.com/thales-gsd"},
  {placeholder: "Linkedin", link: "https://www.linkedin.com/in/thales-dipapidis/"},
  {placeholder: "Email", link: "contact.thalesdipa@gmail.com"},
  {placeholder: "GrowpStudios", link: "https://github.com/GrowpStudios"},
  {placeholder: "Instagram", link: "https://www.instagram.com/gcx.dipa/"},
];

export default function Card() {
  return (
    <section className='card'>
      <Profile />
      <p>"Front-end developer and avid reader"</p>
      {links.map((link) => (
        <Button key={link.link} placeholder={link.placeholder} link={link.link} />
      ))}
    </section>
  );
};