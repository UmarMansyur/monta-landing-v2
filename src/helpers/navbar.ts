const toggleMenu = () => {
  const target = document.getElementById('navbar-cta');
  target?.classList.toggle('hidden')
}

const mouseHover = () => {
  const target = document.getElementById('dropdownNavbar');
  target?.classList.remove('hidden')
}

const hiddenCollapse = () => {
  const target = document.getElementById('dropdownNavbar');
  target?.classList.add('hidden')
}

export {
  toggleMenu,
  mouseHover,
  hiddenCollapse
}