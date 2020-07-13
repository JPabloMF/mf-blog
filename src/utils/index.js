const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const handleSelectBackgroundColor = (type, props) => {
  switch (type.toLowerCase()) {
    case 'html':
      return props.orangeHTML;
    case 'css':
      return props.blueCSS;
    case 'javascript':
      return props.yellowJS;
    case 'react':
      return props.blueReact;
    case 'git':
      return props.white;
    case 'godot':
      return props.white;
    case 'blender':
      return props.white;
    case 'english':
      return props.white;
    default:
      return props.white;
  }
};

export { isMobile, handleSelectBackgroundColor };
