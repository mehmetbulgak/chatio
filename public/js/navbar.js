const navbar = document.querySelector('.fa-bars')

navbar.addEventListener('click', () => {
    const chat__sidebar = document.querySelector('.chat__sidebar')
    chat__sidebar.classList.toggle('chat__sidebar__open')
})

