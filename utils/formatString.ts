function formatString(str: string) {
  if (str.length <= 10) return '19px';
  else if (str.length <= 16) return '17px';
  else return '15px';
}

export default formatString;
