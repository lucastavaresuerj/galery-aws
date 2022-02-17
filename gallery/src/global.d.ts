export {};

declare global {
  type image = { file: File; src: string } | null | undefined;

  type imageForm = { title: string; description: string } | null | undefined;
}
