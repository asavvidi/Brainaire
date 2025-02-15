import SocialItem from "./SocialItem";

const mySocial = [
  {
    url: "https://github.com/asavvidi",
    image: "github-logo.png",
    description: "Github logo",
  },
  {
    url: "https://linkedin.com/in/asavvidi",
    image: "linkedin-logo.png",
    description: "Linkedin logo",
  },
];

export default function SocialList() {
  return (
    <div className="social-container">
      {mySocial.map((social) => {
        return <SocialItem social={social} size={30} key={social.url} />;
      })}
    </div>
  );
}
