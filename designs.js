// Select color input

// Select size input
const c = document.getElementById('pixelCanvas');
let h = $("#inputHeight");
let w = $("#inputWidth");

// When size is submitted by the user, call makeGrid()
$('#inputSubmit').click(function(e) {
  e.preventDefault();
  makeGrid();
});

//Pick color
let color = $("#colorPicker");

function makeGrid() {
  // Your code goes here!
  c.innerHTML = '';
  let height = h.val();
  let width = w.val();

  let addEvent = function(cell) {
        cell.addEventListener('click', function() {
        cell.style.backgroundColor = color.val();
        });
    }

  for (let r = 0; r<height; r++) {
        let row = c.insertRow(r);
    //console.log("row"+r);
    //create a row
    //$("#pixelCanvas").append($(<tr></tr>));
        for (let col = 0; col<width; col++) {
         let cell = row.insertCell(col);
         // console.log("td"+c);
       //$("tr").last().append($(<td></td>));
         cell.addEventListener('click', addEvent(cell));
        }
    }
}
