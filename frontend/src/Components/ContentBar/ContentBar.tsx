import StyledSearchBar from "../SearchBar/SearchBar.style";

type ContentBarProps = {
  className: string;
};
const ContentBar = ({ className }: ContentBarProps) => {
  return (
    <div className={className}>
      <StyledSearchBar className="searchbar" />
    </div>
  );
};

export default ContentBar;
