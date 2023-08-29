"use strict";
class TakePhoto {
    cameraMode;
    camerOn;
    fotoTaken = 0;
    constructor(cameraMode, camerOn) {
        this.cameraMode = cameraMode;
        this.camerOn = camerOn;
    }
    showPreview() {
        console.log("show preview");
    }
}
class Instagram extends TakePhoto {
    cameraMode;
    camerOn;
    constructor(cameraMode, camerOn) {
        super(cameraMode, camerOn);
        this.cameraMode = cameraMode;
        this.camerOn = camerOn;
    }
    takePhoto() { }
    showPreview() {
        console.log("show Ig preview");
    }
    get getFotoTaken() {
        return this.fotoTaken;
    }
}
const photo = new Instagram("square", true);
photo.showPreview();
