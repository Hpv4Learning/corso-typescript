interface TakePhoto {
  camerOn: boolean;
  takePhoto(): void;
  takeVideo(): void;
}

// interface Reel {
//   duration: number;
// }

class Instagram implements TakePhoto {
  constructor(
    private cameraMode: string,
    public camerOn: boolean,
    public carousel: number
  ) {}
  takePhoto(): void {}
  takeVideo(): void {}
}

// class TikTok implements TakePhoto, Reel {
//   constructor(
//     public cameraMode: string,
//     public camerOn: boolean,
//     public duration: number
//   ) {}
//   takePhoto(): void {}
//   takeVideo(): void {}
// }

export {};
