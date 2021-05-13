function sortValues(values) {
  var listItem = null;
  if (values !== "") {
    document.getElementById("valuesSorted").innerHTML = "";
    sortedValues = values;
    var listValues = document.getElementById("valuesSorted");
    values
      .sort(function (fValue, lValue) {
        return lValue - fValue;
      })
      .forEach((element, index) => {
        listItem = document.createElement("li");
        listItem.innerHTML = element;
        listValues.appendChild(listItem);
      });
    document.getElementById("copyValues").hidden = false;
  }
}

function sanityValues(values) {
  for (var propName in values) {
    if (values[propName] === "" || values[propName] === undefined) {
      delete values[propName];
    }
  }
  return values;
}

function getValues() {
  var values = document
    .getElementById("values")
    .value // .replace(/\s/g, "")
    .split(" ")
    .sort();
  values = sanityValues(values);
  console.log(typeof values);
  sortValues(values);
}

function clearValues(data) {
  if (!!data.value && typeof data.value !== "" && data.value !== undefined) {
    document.getElementById("valuesSorted").innerHTML = "";
    //window.location.reload();
  }
}

function copyToClipBoard() {
  var values = document.getElementById("valuesSorted").innerHTML;
  var tempInput = document.createElement("input");
  tempInput.value = values.replace(/(<([^>]+)>)/gi, " ");
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Sorted values copied!");
}
