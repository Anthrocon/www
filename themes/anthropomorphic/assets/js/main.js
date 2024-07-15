(() => {
  const getScrollPosition = () => ({
    x: window.scrollX || document.documentElement.scrollLeft,
    y: window.scrollY || document.documentElement.scrollTop
  });

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const shouldFlip = () => Math.random() < 0.5;

  const getRandomRotation = () => (Math.random() * 96 - 48).toFixed(2);

  const animateMews = (mews) => {
    mews.forEach((mew, index) => {
      mew.alpha -= 0.016;

      if (mew.alpha <= 0) {
        document.body.removeChild(mew.el);
        mews.splice(index, 1);
      } else {
        mew.y--;
        mew.scale += 0.004;

        const transformStyle = `scale(${mew.scale}) rotate(${mew.rotation}deg)${mew.flipX ? ' scaleX(-1)' : ''}`;

        Object.assign(mew.el.style, {
          left: `${mew.x}px`,
          top: `${mew.y}px`,
          opacity: mew.alpha,
          transform: transformStyle,
          fontSize: `${mew.size}px`,
          color: mew.color,
          zIndex: '100',
          position: 'absolute'
        });
      }
    });

    requestAnimationFrame(() => animateMews(mews));
  };

  const handleClick = (event, icons, mews) => {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const mew = document.createElement('div');
    mew.innerHTML = randomIcon;
    mew.className = 'mew';

    const scrollPos = getScrollPosition();
    const posX = event.clientX - 8 + scrollPos.x;
    const posY = event.clientY - 8 + scrollPos.y;
    const flipX = shouldFlip();
    const rotation = getRandomRotation();

    mews.push({
      el: mew,
      x: posX,
      y: posY,
      scale: 1,
      alpha: 1,
      size: 16,
      color: getRandomColor(),
      flipX,
      rotation
    });

    document.body.appendChild(mew);
  };

  const initialize = () => {
    const mews = [];
    const icons = [
      '<i class="fa-solid fa-heart"></i>',
      '<i class="fa-solid fa-paw"></i>',
      '<i class="fa-solid fa-dog"></i>',
      '<i class="fa-solid fa-fish"></i>',
      '<i class="fa-solid fa-dragon"></i>',
      '<i class="fa-solid fa-horse"></i>',
      '<i class="fa-solid fa-dove"></i>',
      '<i class="fa-solid fa-cat"></i>'
    ];

    document.addEventListener('click', (event) => {
      handleClick(event, icons, mews);
    });

    animateMews(mews);
  };

  initialize();
})();
