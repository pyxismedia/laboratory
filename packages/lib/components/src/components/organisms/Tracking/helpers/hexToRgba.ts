
export function hexToRgbA(hex: string, alpha: number){
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      const hexArr = hex.substring(1).split('');
      let color;
      if (hexArr.length === 3) {
        color = [hexArr[0], hexArr[0], hexArr[1], hexArr[1], hexArr[2], hexArr[2]];
      } else {
        color = hexArr;
      }
      const code: number = parseFloat(`0x${color.join('')}`);
      return `rgba(${[(code >> 16) & 255, ( code >> 8) & 255, code & 255].join(',')},${alpha})`;
  }
  throw new Error('Bad Hex');
}
