var $ = jQuery.noConflict();
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
const inputs = document.querySelectorAll(".sidebar input");

function handleUpdate() {
  const suffix = this.dataset.sizing||" "; document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));