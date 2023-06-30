const form = document.getElementById("submit__form");
const submit_btn = document.getElementById("submit__button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  var formData = new FormData(form);

  submit_btn.innerText = "Submitting...";
  submit_btn.disabled = true;
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbwvgN-miulC_5T60M4UxIB8d603ytyISYIem3m0msBEebBZIch9vaIgmgTUKM4_HtNM/exec",
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await res.json();
  submit_btn.innerText = "Submit";
  submit_btn.disabled = false;
  if (result.result === "success") {
    Toastify({
      text: "Row Inserted Successfully",
      className: "success",
      duration: 3000,
    }).showToast();
    form.reset();
    // alert("Row Inserted Successfully");
  } else {
    Toastify({
      text: "Row Insert Failed",
      className: "failed",
      duration: 3000,
    }).showToast();
    // alert("Row Insert Failed");
  }
  //   result: 'success', row: 6}
  //   console.log(result);

  //   for (var p of formData) {
  //     let name = p[0];
  //     let value = p[1];

  //     console.log(name, value);
  //   }
});
