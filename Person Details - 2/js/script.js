(function details() {
  let personDetailsButton = document.querySelectorAll(".person-button");
  const personDetails = [
    {
      Name: "Jhon Doe",
      Age: 17,
      MobileNumber: +17665407031,
      AadharNumber: 840729846061,
      Country: "USA",
      City: "Dover",
      Pincode: 36201,
      State: "Delaware",
    },
    {
      Name: "James",
      Age: 20,
      MobileNumber: +17665407031,
      AadharNumber: 840729846061,
      Country: "USA",
      City: "Dover",
      Pincode: 36201,
      State: "Delaware",
    },
    {
      Name: "Olivia",
      Age: 16,
      MobileNumber: +17665407031,
      AadharNumber: 840729846061,
      Country: "USA",
      City: "Dover",
      Pincode: 36201,
      State: "Delaware",
    },
    {
      Name: "Illa",
      Age: 20,
      MobileNumber: +17665407031,
      AadharNumber: 840729846061,
      Country: "USA",
      City: "Dover",
      Pincode: 36201,
      State: "Delaware",
    },
  ];

  personDetailsButton.forEach((button) => {
    button.addEventListener("click", function onceClick() {
      let clickedName = button.innerHTML;
      let personDetailsArr = personDetails.find(
        (person) => person.Name === clickedName
      );
      let detailsBox = button.nextElementSibling;
      console.log(detailsBox);

      for (let [key, value] of Object.entries(personDetailsArr)) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<strong style="font-size: 16px;">${key}:</strong> <span style="font-size: 15px">${value}</span>`;
        newDiv.style.marginTop = "5px";
        detailsBox.appendChild(newDiv);
      }

      button.removeEventListener("click", onceClick);
    });
  });
})();
