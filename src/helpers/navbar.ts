const toggleMenu = () => {
  const target = document.getElementById('navbar-cta');
  target?.classList.toggle('hidden')
}

const mouseHover = () => {
  const target = document.getElementById('dropdownNavbar');
  target?.classList.remove('hidden')
}

const clickMenu = () => {
  const target = document.getElementById('dropdownNavbar');
  target?.classList.toggle('hidden')
}

const hiddenCollapse = () => {
  const target = document.getElementById('dropdownNavbar');
  target?.classList.add('hidden')
}

const toggleDropdown = (id: string) => {
  const target = document.getElementById(id);
  target?.classList.toggle('hidden')
}

const blurDropdown = (id: string) => {
  const target = document.getElementById(id);
  target?.classList.add('hidden')
}

const focusDropdown = (id: string) => {
  const target = document.getElementById(id);
  target?.classList.remove('hidden')
}


export {
  toggleMenu,
  mouseHover,
  hiddenCollapse,
  clickMenu,
  toggleDropdown,
  blurDropdown,
  focusDropdown
}