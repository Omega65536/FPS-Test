var handleInputs = function() {
    camera.lookAt(camera.position.x, EYEHEIGHT, camera.position.z - 1.);

    if (walkF) {
        camera.translateZ(-MOVESPEED * deltaTime);
    }
    if (walkB) {
        camera.translateZ(+MOVESPEED * deltaTime);
    }
    if (walkL) {
        camera.translateX(-MOVESPEED * deltaTime);
    }
    if (walkR) {
        camera.translateX(+MOVESPEED * deltaTime);
    }

    camera.rotateX(playerPitch);
    camera.rotateY(playerYaw);
}

document.addEventListener("keydown", function(e) {
    switch (e.which) {
        case 87:
            walkF = true;
            break;
        case 83:
            walkB = true;
            break;
        case 65:
            walkL = true;
            break;
        case 68:
            walkR = true;
            break;
        case 32:
            jump = true;
            break;
    }
});

document.addEventListener("keyup", function(e) {
    switch (e.which) {
        case 87:
            walkF = false;
            break;
        case 83:
            walkB = false;
            break;
        case 65:
            walkL = false;
            break;
        case 68:
            walkR = false;
            break;
        case 32:
            jump = false;
            break;
    }
});

document.addEventListener("mousemove", function(e) {
    playerPitch -= e.movementY * 0.01;
    playerYaw -= e.movementX * 0.01;
});

document.addEventListener("click", function() {
    document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;
    document.body.requestPointerLock();
});
