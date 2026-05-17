function SubmitButton() {
  // Mouse enter event handler
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Mouse leave event handler
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;