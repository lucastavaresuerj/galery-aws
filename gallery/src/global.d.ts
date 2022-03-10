export {};

declare global {
  type level = 'private' | 'public' | 'protected';
  type image = { file: File; src: string } | null | undefined;
  type imageForm =
    | { title: string; description: string; security: level }
    | null
    | undefined;
  type imageData = {
    metadata?: {
      title: string;
      description: string;
      uploadDate: Date;
      author: {
        name: string;
        SignedURL: string;
      };
    };
    signedURL: string;
  };
}
