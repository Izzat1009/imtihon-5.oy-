const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__username')
const passwordEl = document.querySelector('.form__password')
const BASE_URL = "https://dummyjson.com"

formEl.addEventListener('submit', e => {
  e.preventDefault()

  let user = {
      username: inputEl.value,
      password: passwordEl.value
  }
  

  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(
      user),
  })
  .then((res) => {
    if(!res.ok){
        throw new Error ( "Username or password is incorrect")
    }
    return res.json()


  })
  .then(res => {
    localStorage.setItem("accessToken", res.accessToken)
    open("/pages/account.html", "_self")
    
  })
  .catch((err) => {
    alert(err)
  })

})
