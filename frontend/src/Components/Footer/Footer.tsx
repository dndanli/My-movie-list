import TMDBLogo from "../../Assets/tmdb.svg";
type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
      <img className="tmdb-logo" src={TMDBLogo} alt="tmdb" />
      <h4 className="footer-text">
        Thanks to the
        <span id="link">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </span>
        team for providing all of the data on this website.
      </h4>
    </div>
  );
};

export default Footer;
