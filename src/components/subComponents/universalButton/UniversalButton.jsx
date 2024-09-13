const UniversalButton = ({ type, title, onClick }) => {
  if (!title) {
    return <div>Error: Title missing, add - title: "something" to args</div>;
  }

  if (!type) {
    return (
      <div>Error: Type missing, add - type: "submit" or "button" to args</div>
    );
  }

  if (type === "button" && !onClick) {
    return (
      <div>
        Error: onClick-function missing for button with value "button", add
        onClick: function to args
      </div>
    );
  }

  return (
    <div>
      <button type={type} onClick={type === "button" ? onClick : undefined}>
        {title}
      </button>
    </div>
  );
};

export default UniversalButton;
