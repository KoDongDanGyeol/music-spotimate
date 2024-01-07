import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const StyledGlobal = styled.createGlobalStyle`
  :root[data-theme="dark"] {
    --color-gray50: ${(props) => props.theme.color.dark.gray50};
    --color-gray75: ${(props) => props.theme.color.dark.gray75};
    --color-gray100: ${(props) => props.theme.color.dark.gray100};
    --color-gray200: ${(props) => props.theme.color.dark.gray200};
    --color-gray300: ${(props) => props.theme.color.dark.gray300};
    --color-gray400: ${(props) => props.theme.color.dark.gray400};
    --color-gray500: ${(props) => props.theme.color.dark.gray500};
    --color-gray600: ${(props) => props.theme.color.dark.gray600};
    --color-gray700: ${(props) => props.theme.color.dark.gray700};
    --color-gray800: ${(props) => props.theme.color.dark.gray800};
    --color-gray900: ${(props) => props.theme.color.dark.gray900};
    --color-red400: ${(props) => props.theme.color.dark.red400};
    --color-red500: ${(props) => props.theme.color.dark.red500};
    --color-red600: ${(props) => props.theme.color.dark.red600};
    --color-red700: ${(props) => props.theme.color.dark.red700};
    --color-red800: ${(props) => props.theme.color.dark.red800};
    --color-red900: ${(props) => props.theme.color.dark.red900};
    --color-red1000: ${(props) => props.theme.color.dark.red1000};
    --color-orange400: ${(props) => props.theme.color.dark.orange400};
    --color-orange500: ${(props) => props.theme.color.dark.orange500};
    --color-orange600: ${(props) => props.theme.color.dark.orange600};
    --color-orange700: ${(props) => props.theme.color.dark.orange700};
    --color-orange800: ${(props) => props.theme.color.dark.orange800};
    --color-orange900: ${(props) => props.theme.color.dark.orange900};
    --color-orange1000: ${(props) => props.theme.color.dark.orange1000};
    --color-blue400: ${(props) => props.theme.color.dark.blue400};
    --color-blue500: ${(props) => props.theme.color.dark.blue500};
    --color-blue600: ${(props) => props.theme.color.dark.blue600};
    --color-blue700: ${(props) => props.theme.color.dark.blue700};
    --color-blue800: ${(props) => props.theme.color.dark.blue800};
    --color-blue900: ${(props) => props.theme.color.dark.blue900};
    --color-blue1000: ${(props) => props.theme.color.dark.blue1000};
    --color-green400: ${(props) => props.theme.color.dark.green400};
    --color-green500: ${(props) => props.theme.color.dark.green500};
    --color-green600: ${(props) => props.theme.color.dark.green600};
    --color-green700: ${(props) => props.theme.color.dark.green700};
    --color-green800: ${(props) => props.theme.color.dark.green800};
    --color-green900: ${(props) => props.theme.color.dark.green900};
    --color-green1000: ${(props) => props.theme.color.dark.green1000};
  }

  :root[data-theme="light"] {
    --color-gray50: ${(props) => props.theme.color.light.gray50};
    --color-gray75: ${(props) => props.theme.color.light.gray75};
    --color-gray100: ${(props) => props.theme.color.light.gray100};
    --color-gray200: ${(props) => props.theme.color.light.gray200};
    --color-gray300: ${(props) => props.theme.color.light.gray300};
    --color-gray400: ${(props) => props.theme.color.light.gray400};
    --color-gray500: ${(props) => props.theme.color.light.gray500};
    --color-gray600: ${(props) => props.theme.color.light.gray600};
    --color-gray700: ${(props) => props.theme.color.light.gray700};
    --color-gray800: ${(props) => props.theme.color.light.gray800};
    --color-gray900: ${(props) => props.theme.color.light.gray900};
    --color-red400: ${(props) => props.theme.color.light.red400};
    --color-red500: ${(props) => props.theme.color.light.red500};
    --color-red600: ${(props) => props.theme.color.light.red600};
    --color-red700: ${(props) => props.theme.color.light.red700};
    --color-red800: ${(props) => props.theme.color.light.red800};
    --color-red900: ${(props) => props.theme.color.light.red900};
    --color-red1000: ${(props) => props.theme.color.light.red1000};
    --color-orange400: ${(props) => props.theme.color.light.orange400};
    --color-orange500: ${(props) => props.theme.color.light.orange500};
    --color-orange600: ${(props) => props.theme.color.light.orange600};
    --color-orange700: ${(props) => props.theme.color.light.orange700};
    --color-orange800: ${(props) => props.theme.color.light.orange800};
    --color-orange900: ${(props) => props.theme.color.light.orange900};
    --color-orange1000: ${(props) => props.theme.color.light.orange1000};
    --color-blue400: ${(props) => props.theme.color.light.blue400};
    --color-blue500: ${(props) => props.theme.color.light.blue500};
    --color-blue600: ${(props) => props.theme.color.light.blue600};
    --color-blue700: ${(props) => props.theme.color.light.blue700};
    --color-blue800: ${(props) => props.theme.color.light.blue800};
    --color-blue900: ${(props) => props.theme.color.light.blue900};
    --color-blue1000: ${(props) => props.theme.color.light.blue1000};
    --color-green400: ${(props) => props.theme.color.light.green400};
    --color-green500: ${(props) => props.theme.color.light.green500};
    --color-green600: ${(props) => props.theme.color.light.green600};
    --color-green700: ${(props) => props.theme.color.light.green700};
    --color-green800: ${(props) => props.theme.color.light.green800};
    --color-green900: ${(props) => props.theme.color.light.green900};
    --color-green1000: ${(props) => props.theme.color.light.green1000};
  }

  html,
  body {
    min-width: 360px;
    font-size: ${(props) => props.theme.typo.size.base};
    line-height: ${(props) => props.theme.typo.leading.base};
    font-weight: 400;
    font-family:
      var(--font-notoSansKr),
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: hsl(var(--color-gray800));
    background: hsl(var(--color-gray100));
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
    -webkit-text-size-adjust: none;
    -webkit-overflow-scrolling: touch;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  label {
    cursor: pointer;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    display: inline-block;
    color: hsl(var(--color-gray800));
    text-decoration: none;
  }
  button {
    display: inline-block;
    padding: 0;
    font-size: ${(props) => props.theme.typo.size.base};
    line-height: ${(props) => props.theme.typo.leading.base};
    font-family: var(--font-notoSansKr), sans-serif;
    color: hsl(var(--color-gray800));
    border: 0;
    border-radius: 0;
    background: none;
    vertical-align: middle;
    cursor: pointer;
    &[disabled] {
      cursor: default;
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0;
    font-size: ${(props) => props.theme.typo.size.base};
    line-height: ${(props) => props.theme.typo.leading.base};
    font-family: var(--font-notoSansKr), sans-serif;
    color: hsl(var(--color-gray800));
    border: 0;
    border-radius: 0;
    background: none;
    vertical-align: middle;
    -webkit-appearance: none;
    &:disabled,
    &:read-only {
      cursor: default;
    }
  }
  input {
    &[type="button"],
    &[type="reset"],
    &[type="submit"] {
      cursor: pointer;
    }
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    &:-ms-input-placeholder,
    &::-moz-placeholder,
    &::-webkit-input-placeholder {
      color: hsl(var(--color-gray700));
    }
  }
  select {
  }
  textarea {
    overflow: auto;
    resize: vertical;
    &:-ms-input-placeholder,
    &::-moz-placeholder,
    &::-webkit-input-placeholder {
      color: hsl(var(--color-gray700));
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    th,
    td {
      text-align: left;
    }
  }

  body.header-opened {
    overflow: hidden;
  }

  .sr-only {
    position: absolute;
    margin: -1px;
    padding: 0;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
  }
`

export default StyledGlobal
