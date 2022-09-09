const URL_API = 'https://api.github.com/users';

const searchBtn = document.querySelector('.seach-form-button');
const searchInput = document.querySelector('.seach-form-input');
const listUserElement = document.querySelector('.list-user--show');

let listUsers = [];
let user = {};

async function loadListUser() {
  try {
    const res = await fetch(URL_API);
    const dt = await res.json();

    dt.forEach((data, index) => {
      const user = {
        avatarUrl: data.avatar_url,
        eventsUrl: data.events_url,
        followersUrl: data.followers_url,
        followingUrl: data.following_url,
        gistsUrl: data.gists_url,
        gravatarId: data.gravatar_id,
        htmlUrl: data.html_url,
        id: data.id,
        login: data.login,
        nodeId: data.node_id,
        organizationsUrl: data.organizations_url,
        receivedEventsUrl: data.received_events_url,
        reposUrl: data.repos_url,
        siteAdmin: data.site_admin,
        starredUrl: data.starred_url,
        subscriptionsUrl: data.subscriptions_url,
        type: data.type,
        url: data.url,
        index: index,
      }

      listUsers.push(user);
    })
    render(listUsers);
  } catch (error) {
    console.log(error)
  }
};

function render(dt) {
  $('.pagination-container').pagination({
    dataSource: dt,
    pageSize: 5,
    callback: function(data, pagination) {
      renderUser(data);
    }
  })
};

function renderUser(listUsers) {
  const markup = listUsers.map(generateMarkup).join('');

  listUserElement.innerHTML = '';
  listUserElement.insertAdjacentHTML('afterbegin', markup)
};

function generateMarkup(user) {
  return /*html*/`
    <tr>
      <td>${user.index + 1}</td>
      <td>
          <img src="${user.avatarUrl}" alt="${user.login}" loading="lazy">
      </td>
      <td>${user.login}</td>
      <td>${user.url}</td>
      <td>${user.reposUrl}</td>
    </tr>
  `;
}

// search
function seachClick() {
  searchBtn.addEventListener('click', () => {
    seachUser();
  })
};
function seachEnter() {
  searchInput.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
      seachUser();
    }
  })
};

function seachUser() {
  const value = searchInput.value;
  if (!value) loadListUser() ;
  // loadUser(value);
  const result = listUsers.filter(n => n.login.toLowerCase().includes(value.toLowerCase()));

  render(result);
};

async function loadUser(value) {
  try {
    const res = await fetch(`${URL_API}/${value}`);
    const dt = await res.json();
    
    user = {
      avatarUrl: dt.avatar_url,
      id: dt.id,
      login: dt.login,
      reposUrl: dt.repos_url,
      url: dt.url,
      index: 0,
    }
    
    render([user]);
  } catch (error) {
    console.log(error)
  }
};

function init() {
  loadListUser();
  seachClick();
  seachEnter();
};

window.addEventListener('load', init);