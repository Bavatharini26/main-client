document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //const confirmpassword = document.getElementById('confirmpassword').value;

    /*const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email,password, confirmpassword })
    });

    if (response.ok) {
        alert('Registration successful');
        window.location.href = 'index.html';
    } else {
        alert('Registration failed');
    }

});*/try{
    
    const response= await fetch("http://localhost:5000/register",{
        method:'POST',
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify({username,email,password }),
    })
    const result = await response.json();

    if (result.success) {
        window.location.href = '/index.html'; 
    } else {
       console.error("error occured")
       alert('You are not a User Please Register')
       
    }
   
} catch (error) {
    console.log('Error during login:', error);}});
/*.then(response=>response.json())
        .then(data=>{
            if(data.success){
                alert('Registration Successful');
            }
            else{
                alert('Registration Failed');
            }

        })
        .catch(error=>console.error('Error:',error));
    });*/

