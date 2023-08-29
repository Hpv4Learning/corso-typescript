abstract class TakePhoto {
  protected fotoTaken: number = 0;
  constructor(public cameraMode: string, public camerOn: boolean) {}

  abstract takePhoto(): void;
  showPreview(): void {
    console.log("show preview");
  }
}

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public camerOn: boolean) {
    super(cameraMode, camerOn);
  }
  takePhoto(): void {}

  showPreview(): void {
    console.log("show Ig preview");
  }

  get getFotoTaken(): number {
    return this.fotoTaken;
  }
}

const photo = new Instagram("square", true);
photo.showPreview();
