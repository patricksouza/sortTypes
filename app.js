function sortValues(values) {
  var listItem = null;
  var sortedValues = null;
  if (values[0] !== "") {
    document.getElementById("valuesSorted").innerHTML = "";
    sortedValues = values.reverse();
    var listValues = document.getElementById("valuesSorted");
    sortedValues
      .sort(function (fValue, lValue) {
        return lValue - fValue;
      })
      .forEach((element, index) => {
        listItem = document.createElement("li");
        listItem.innerHTML = element;
        listValues.appendChild(listItem);
      });
  }
}

function getValues() {
  var values = document
    .getElementById("values")
    .value//.replace(/\s/g, "")
    .split(" ");
  sortValues(values);
}

function clearValues(data) {
  if (!!data.value && typeof data.value !== "" && data.value !== undefined) {
    document.getElementById("valuesSorted").innerHTML = "";
    //window.location.reload();
  }
}
