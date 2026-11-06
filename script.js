```javascript
let z = 1;

// CREATE ROCKET PARTS

function createPart(type) {

    // Check technology unlock
    if (typeof isUnlocked === "function") {

        if (!isUnlocked(type)) {
            alert("Unlock this part in the Tech Tree first!");
            return;
        }

    }

    let part = document.createElement("div");

    part.className = type + " part";

    part.style.left = "300px";
    part.style.top = "180px";
    part.style.zIndex = ++z;

    document.getElementById("builder").appendChild(part);

    drag(part);

}


// DRAG PARTS

function drag(element) {

    let offsetX = 0;
    let offsetY = 0;

    element.onmousedown = function(e) {

        if (e.button !== 0) return;

        e.preventDefault();

        let box = document
            .getElementById("builder")
            .getBoundingClientRect();

        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;

        element.style.zIndex = ++z;

        document.onmousemove = function(e) {

            let box = document
                .getElementById("builder")
                .getBoundingClientRect();

            let x = e.clientX - box.left - offsetX;
            let y = e.clientY - box.top - offsetY;

            x = Math.max(0, Math.min(x, box.width - element.offsetWidth));
            y = Math.max(0, Math.min(y, box.height - element.offsetHeight));

            element.style.left = x + "px";
            element.style.top = y + "px";

        };

        document.onmouseup = function() {

            snapPart(element);

            document.onmousemove = null;
            document.onmouseup = null;

        };

    };

}


// SNAP PARTS TOGETHER

function snapPart(part) {

    let parts = document.querySelectorAll("#builder .part");

    parts.forEach(function(other) {

        if (other === part) return;

        let p1 = part.getBoundingClientRect();
        let p2 = other.getBoundingClientRect();

        let horizontalDistance =
            Math.abs(p1.left - p2.left);

        let verticalDistance =
            Math.abs(p1.bottom - p2.top);

        if (
            horizontalDistance < 30 &&
            verticalDistance < 25
        ) {

            part.style.left = other.style.left;

            part.style.top =
                (parseInt(other.style.top) - part.offsetHeight) + "px";

        }

    });

}


// RESTORE DRAG FUNCTIONALITY

function restoreRocketParts() {

    let parts = document.querySelectorAll("#builder .part");

    parts.forEach(function(part) {

        drag(part);

    });

}


// CLEAR BUILDER

function clearBuilder() {

    document.getElementById("builder").innerHTML = "";

}


// INITIALIZE EXISTING PARTS

document.addEventListener("DOMContentLoaded", function() {

    restoreRocketParts();

});
```