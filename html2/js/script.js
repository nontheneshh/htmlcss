let team = {
  prevIndex: -1,
  person: [
    {name: 'About Schmilt', description: '1 Monetization first never advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwith twitter ownership succes disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market'},
    {name: 'About Cramer', description: '2 Monetization first never advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwith twitter ownership succes disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market'},
    {name: 'About Schrader', description: '3 Monetization first never advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwith twitter ownership succes disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market'},
    {name: 'About Teichmarin', description: '4 Monetization first never advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwith twitter ownership succes disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market'}
  ]
};

let teamElements = document.querySelectorAll('.our-team__container__item');
for (var i = 0; i < teamElements.length; i++) {
  teamElements[i].addEventListener('click', f.bind(null, i), false);
}


function f(clickedIndex, e) {
  let aboutTeam = document.querySelector('.our-team__about');

  if (team.prevIndex != -1) aboutTeam.remove();

  if (team.prevIndex == clickedIndex){
    team.prevIndex = -1;
    return;
  }

  let about = document.createElement('div');
  about.classList.add('our-team__about');
  let item = e.target.closest('.our-team__container__item');

  about.innerHTML = `<div class="our-team__about__text">
          <h3>${team.person[clickedIndex].name}</h3>
          <p>${team.person[clickedIndex].description}</p>
        </div>
        <div class="our-team__about__social">
          <ul>
            <li><a href="#">facebook</a></li>
            <li><a href="#">twitter</a></li>
            <li><a href="#">linkedIn</a></li>
            <li><a href="#">instagram</a></li>
          </ul>
        </div>`

  team.prevIndex = clickedIndex;

  if (screen.width < 585) item.parentNode.insertBefore(about, item.nextSibling);
  else item.parentNode.append(about);
}
