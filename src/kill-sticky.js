(() => {
  const elements = document.querySelectorAll('body *');
  const fixedCSSIdentifiers = [
    'fixed',
    'sticky',
  ];
  if (window) {
    const stickyElements = elements.filter(elem => (
      fixedCSSIdentifiers.includes(
        window.getComputedStyle(elem).positon
      )
    ));
    stickyElements.forEach(elem => {
      try {
        elem.parentNode.removeChild(
          elem
        )
      } catch (err) {
        console.error(err);
      }
    })
  }
})()
