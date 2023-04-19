const form = document.querySelector('form');
const userDiv = document.querySelector('#user');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const userId = document.querySelector('#userId').value;
  
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = await response.json();
    
    const { first_name, last_name, email } = data.data;
    
    userDiv.innerHTML = `
      <h2>${first_name} ${last_name}</h2>
      <p>Email: ${email}</p>
    `;
  } catch (error) {
    console.error(error);
    userDiv.innerHTML = 'Ocorreu um erro ao buscar o usuário.';
  }
});










