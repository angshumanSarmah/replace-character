function convertContent() {
  const source = document.getElementById("source")?.value;
  const target = document.getElementById("target")?.value;
  const userInputText = document.getElementById("textArea")?.value;
  const display = document.getElementById("converted-text");

  display.value = userInputText.replaceAll(source, target);
  showToast('converted');
}

function clearContent() {
  const textarea = document.getElementById("textArea");
  const convertedText = document.getElementById("converted-text");
  const source = document.getElementById("source")?.value;
  const target = document.getElementById("target")?.value;
  textarea.value = "";
  convertedText.value = "";
  source.value = "";
  target.value = "";

  showToast('cleared')
}



  function showToast(type) {
    document.getElementById(`toast-cleared`).classList.remove();
    document.getElementById(`toast-converted`).classList.remove();
    
    const toast = document.getElementById(`toast-${type}`);
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // Display toast for 3 seconds
  }

