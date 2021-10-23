const linksSocialMedia = {
      github:     'alan209',
      linkedin:   '/in/desenvolvedorwebalanmesquita',
      facebook:   'alan.mesquita.dev',
      instagram:  'alan.mesquita_',
      twitter:    'Alan_Mesquita_'
    }

    function changeSocialMediaLinks() {
      for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`       
      }
    }

    changeSocialMediaLinks()

    function getGitHubProfileInfos() {
      const url = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userLink.href = data.html_url
        userBio.textContent= data.bio
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
      })
    }

    getGitHubProfileInfos()