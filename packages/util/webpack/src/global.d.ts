// According https://stylable.io/docs/getting-started/install-configure#types
declare module '*.st.css' {
  const stylesheet: import('@stylable/runtime').RuntimeStylesheet;
  export default stylesheet;
}
