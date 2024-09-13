const textname = document.getElementById("intro-welcome");
const userAvatar = document.getElementById("user-avatar");
const b = textname.querySelector("p b");
const userAvatarIMG = userAvatar.querySelector("img");

fetch('https://api.github.com/users/jeanxpereira')
  .then(response => response.json())
  .then(data => {
    const avatar = data.avatar_url;
    const name = data.name;
    b.textContent = name;
    userAvatarIMG.src = avatar;
  })
  .catch(error => console.error('Erro ao buscar o usuário:', error));
