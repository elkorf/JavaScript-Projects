const updateNumbers = (element) => {
    let initialValue = 0;
    const increaseCount = setInterval(() => {
      initialValue += 1;
      if (initialValue > parseInt(element.dataset.value)) {
        element.textContent = `${initialValue}+`;
        clearInterval(increaseCount);
        return;
      }
      element.textContent = `${initialValue}+`;
    }, 1);
  };

const elements = [...document.querySelectorAll('.count')];

elements.forEach((element) => {
    updateNumbers(element);
});