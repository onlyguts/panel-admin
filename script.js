const details = document.querySelectorAll('.details');
details.forEach(detail => {
  detail.addEventListener('click', () => {
    details.forEach(det => {
      if (det !== detail) {
        det.removeAttribute('open');
      }
    });
  });
});
