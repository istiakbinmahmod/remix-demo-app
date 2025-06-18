/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

// CSS modules
declare module "*.css" {
  const content: string;
  export default content;
}