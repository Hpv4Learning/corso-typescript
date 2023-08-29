"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface Reel {
//   duration: number;
// }
class Instagram {
    cameraMode;
    camerOn;
    carousel;
    constructor(cameraMode, camerOn, carousel) {
        this.cameraMode = cameraMode;
        this.camerOn = camerOn;
        this.carousel = carousel;
    }
    takePhoto() { }
    takeVideo() { }
}
