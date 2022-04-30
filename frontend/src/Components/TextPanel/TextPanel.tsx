type TextPanelProps = {
  className: string;
  text: string;
};

const TextPanel = ({ className, text }: TextPanelProps) => {
  return (
    <div className={className}>
      <h1 id="overview-info-header">Storyline</h1>
      <p className="overview-text">{text}</p>
    </div>
  );
};

export default TextPanel;
