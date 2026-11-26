function validateForm() {
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const orderNo = document.getElementById("order-no").value.trim();
  const productCode = document.getElementById("product-code").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const complaintGroup = document.querySelectorAll(
    "#complaints-group input[type='checkbox']",
  );
  const complaintChecked = [...complaintGroup].some(
    (complaint) => complaint.checked,
  );
  const complaintOther = document.getElementById("other-complaint").checked;
  const complaintDesc = document
    .getElementById("complaint-description")
    .value.trim();
  const solutionGroup = document.querySelectorAll(
    "#solutions-group input[type='radio']",
  );
  const solutionChecked = [...solutionGroup].some(
    (complaint) => complaint.checked,
  );
  const solutionOther = document.getElementById("other-solution").checked;
  const solutionDesc = document
    .getElementById("solution-description")
    .value.trim();

  return {
    "full-name": fullName !== "",
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email),
    "order-no": /^2024\d{6}$/.test(orderNo),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(
      productCode,
    ),
    quantity: /^\d+$/.test(quantity) && Number(quantity) > 0,
    "complaints-group": complaintChecked,
    "complaint-description": !complaintOther || complaintDesc.length >= 20,
    "solutions-group": solutionChecked,
    "solution-description": !solutionOther || solutionDesc.length >= 20,
  };
}

function isValid(result) {
  return Object.values(result).every((value) => value === true);
}

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("form");
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const orderNo = document.getElementById("order-no");
  const productCode = document.getElementById("product-code");
  const quantity = document.getElementById("quantity");
  const complaintGroup = document.getElementById("complaints-group");
  const complaintDesc = document.getElementById("complaint-description");
  const solutionGroup = document.getElementById("solutions-group");
  const solutionDesc = document.getElementById("solution-description");

  function changeColor(el, valid) {
    el.style.borderColor = valid ? "green" : "red";
  }

  form.addEventListener("change", (e) => {
    const target = e.target;
    const result = validateForm();

    if (target.id === "full-name") changeColor(fullName, result["full-name"]);
    else if (target.id === "email") changeColor(email, result["email"]);
    else if (target.id === "order-no") changeColor(orderNo, result["order-no"]);
    else if (target.id === "product-code")
      changeColor(productCode, result["product-code"]);
    else if (target.id === "quantity")
      changeColor(quantity, result["quantity"]);
    else if (target.closest("#complaints-group")) {
      changeColor(complaintGroup, result["complaints-group"]);
      if (target.id === "other-complaint")
        changeColor(complaintDesc, result["complaint-description"]);
    } else if (target.id === "complaint-description")
      changeColor(complaintDesc, result["complaint-description"]);
    else if (target.closest("#solutions-group")) {
      changeColor(solutionGroup, result["solutions-group"]);
      if (target.id === "other-solution")
        changeColor(solutionDesc, result["solution-description"]);
    } else if (target.id === "solution-description")
      changeColor(solutionDesc, result["solution-description"]);
  });

  form.addEventListener("submit", (e) => {
    const result = validateForm();
    const valid = isValid(result);

    if (!valid) {
      e.preventDefault();
      if (!result["full-name"]) changeColor(fullName, false);
      if (!result["email"]) changeColor(email, false);
      if (!result["order-no"]) changeColor(orderNo, false);
      if (!result["product-code"]) changeColor(productCode, false);
      if (!result["quantity"]) changeColor(quantity, false);
      if (!result["complaints-group"]) changeColor(complaintGroup, false);
      if (!result["complaint-description"]) changeColor(complaintDesc, false);
      if (!result["solutions-group"]) changeColor(solutionGroup, false);
      if (!result["solution-description"]) changeColor(solutionDesc, false);
    }
  });
});
