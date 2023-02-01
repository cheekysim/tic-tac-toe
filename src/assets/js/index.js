let row1 = document.querySelectorAll('.row1');
let row2 = document.querySelectorAll('.row2');
let row3 = document.querySelectorAll('.row3');
let col1 = document.querySelectorAll('.col1');
let col2 = document.querySelectorAll('.col2');
let col3 = document.querySelectorAll('.col3');
let diag1 = document.querySelectorAll('.diag1');
let diag2 = document.querySelectorAll('.diag2');
let rows = [row1, row2, row3];
let all = [row1, row2, row3, col1, col2, col3, diag1, diag2];
let turn = 0;
let won = false;
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.getAttribute('active') === 'true') {
            e.target.setAttribute('active', 'false');
            if (turn === 0) { // X
                e.target.classList.add('x');
                turn = 1;
                document.getElementById('turn').innerText = "O's turn";
            } else if (turn === 1) {
                e.target.classList.add('o');
                turn = 0
                document.getElementById('turn').innerText = "X's turn";
            }
        }
        if (!won) {
            checkWin();
        }
    })
});

function checkWin() {
    all.forEach((items) => {
        let x = 0;
        let o = 0;
        items.forEach((item) => {
            if (item.classList.contains('x')) {
                x++;
            } else if (item.classList.contains('o')) {
                o++;
            }
        });
        if (x === 3) {
            setTimeout(() => {
                alert("X Has Won!");
                window.location.reload();
            }, 500);
            document.querySelectorAll('.grid-item').forEach((item) => {item.setAttribute('active', 'false')})
            won = true;
        } else if (o === 3) {
            setTimeout(() => {
                alert("O Has Won!")
                window.location.reload();
            }, 500);
            document.querySelectorAll('.grid-item').forEach((item) => {item.setAttribute('active', 'false')})
            won = true;
        }
    });
    let draw = 0;
    if (!won) {
        rows.forEach((row) => {
            row.forEach((item) => {
                if (item.classList.contains('x')) {
                    draw++;
                } else if (item.classList.contains('o')) {
                    draw++;
                }
            });
        })
        if (draw === 9) {
            setTimeout(() => {
                alert("It's a draw!");
                window.location.reload();
            }, 500);
        }
    }
}