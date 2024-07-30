let table;
let max = 10;

// Creating the first table
create_table();

// Updating the maximum value in the code
function update_max_value(value) {
  max = value;
  create_table();
  sfx();
  document.getElementById("selected_value").innerHTML =
    "Selected Value: " + value;
}

//SFX

function sfx() {
  const sfx = document.getElementById("sfx");
  sfx.pause();
  sfx.currentTime = 0;
  sfx.play();
}
// Creating the whole table
function create_table() {
  // Creaing the table
  table = "<table>";

  // Creating Rows
  for (let j = -1; j <= max; j++) {
    table += "<tr>";

    // Creating the first row
    if (j == -1) {
      // Adding the X cell
      table += "<td class='x'>";
      table += "x";
      table += "</td>";

      // Adding the numberd cells
      for (let i = 0; i <= max; i++) {
        table += "<td class='guide'>";
        table += i;
        table += "</td>";
      }
    } else {
      // Creating the other rows
      // Adding the row number cell
      table += "<td class='guide'>";
      table += j;
      table += "</td>";

      for (let i = 0; i <= max; i++) {
        table += "<td>";
        // Doing the multplication
        table += i * j;
        table += "</td>";
      }
    }

    table += "</tr>";
  }

  table += "</table>";

  // Displaying the tabel
  document.getElementById("table").innerHTML = table;
}
