document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();/*
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username,email, password })
        });

        const result = await response.json();
        if (result.token) {
            localStorage.setItem('token', result.token);
            window.location.href = 'mainpage.html';  // Adjust this path if necessary
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
);*/
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
try{

const response=await fetch(`http://localhost:5000/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({username,email, password }),
})
 const result = await response.json();

if (result.success) {
    window.location.href = '/mainpage.html'; 
} else {
   console.error("error occured")
   alert('You are not a User Please Register')
   
}

} catch (error) {
console.log('Error during login:', error);}});

/*.then(response => response.json())
.then(data => {
    if (data.success) {
        alert('Login successful');
        // Redirect to another page or handle login success
    } else {
        alert('Login failed');
    }
})
.catch(error => console.error('Error:', error));
});*/