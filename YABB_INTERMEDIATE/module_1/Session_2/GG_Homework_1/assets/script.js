const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
  alert('You just played Aimer Song`s');
});

// Get data from API
const request = new XMLHttpRequest();
request.open(
  'GET',
  'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
);
request.send();
request.onload = () => {
  if (request.status === 200) {
    console.log(JSON.parse(request.response));
  } else {
    alert(`some request ereor ${request.response}`);
  }
};
