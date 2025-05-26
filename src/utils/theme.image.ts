export function chooseThemeImage(theme?: string) {
  if (theme === undefined) {
    return "/logo.png";
  } else if (theme === "light") {
    return "/logo.png";
  } else {
    return "/logo2.png";
  }
}
