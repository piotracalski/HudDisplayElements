import {
  colorModes
} from './data'

export const setSegmentMode = (id, mode, allSegments) => {
  let segment = document.getElementById(id);
  let rotation = (360 / allSegments) * parseInt(id.split('-')[2]);
  let rgb = getColor(rotation);
  if (mode === 'on') {
    if (!Array.from(segment.classList).includes(mode)) {
      segment.classList.add(mode);
      segment.style.backgroundColor = rgb;
      segment.style.boxShadow = `${rgb} 0px 0px 15px 1px`;
    }
  } else if (mode === 'default') {
    if (Array.from(segment.classList).includes('on')) {
      segment.classList.remove('on');
      segment.style.backgroundColor = `transparent`;
      segment.style.boxShadow = `none`;
    }
  }
};

export const setCenterValueColor = (id, percentage) => {
  let rotation = 360 * percentage / 100;
  let rgb = getColor(rotation);
  document.getElementById(id).style.color = rgb;
};

export const getColor = (rotation, colorMode = 'color') => {
  let blue;
  let red;
  let green;
  if (colorMode === 'color') {
    blue = 0;
    if (rotation <= 180) {
        green = Math.round(255 * rotation / 180);
        red = 255;
    } else if (rotation <= 360) {
        green = 255;
        red = Math.round(255 * (2 - rotation / 180));
    }
  } else if (colorMode === 'default') {
    red = colorModes.default.red;
    green = colorModes.default.green;
    blue = colorModes.default.blue;
  }
  return `rgb(${red},${green},${blue})`;
};