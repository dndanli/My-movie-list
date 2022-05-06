import { aboutText, listAboutText } from "./AboutText";

type AboutProps = {
  className: string;
};
const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <h1 className="header-1">About my movie list.</h1>
      <p>{aboutText[0]}</p>

      <div className="wrapper">
      <h1 className="header-1">With MVL you can.</h1>
      <ul className="list-about">
        {listAboutText.map((obj: any, index: number) => {
          return (
            <div key={index}>
              <span className="icon">{obj.icon}</span> <p>{obj.text}</p> </div>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default About;
