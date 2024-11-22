export function capitalizeFirstCharacter(str: string) {
  if (str.split("-").length > 2) {
    const newStr =
      str.split("-").join(" ").split(" ")[0].toUpperCase() +
      str.slice(3).split("-").join(" ");
    const arr = newStr.split(" ");
    const first = arr[0];
    const second = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    const third = arr[2]?.charAt(0).toUpperCase() + arr[2]?.slice(1);
    return first + " " + second + " " + third;
  } else {
    const arr = str.split("-");
    const first = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    const second = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    return first + " " + second;
  }
}
