export const setSegmentMode = (id, mode) => {
  let segment = document.getElementById(id);
  if (mode === 'on') {
    if (!Array.from(segment.classList).includes(mode)) {
      segment.classList.add(mode);
    }
  } else if (mode === 'default') {
    if (Array.from(segment.classList).includes('on')) {
      segment.classList.remove('on');
    }
  }
}