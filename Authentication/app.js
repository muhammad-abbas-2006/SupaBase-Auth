// Working for signup page

const supabaseUrl = 
const supabaseKey =
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)


document.querySelector('#btn').addEventListener('click',async()=>{
    let fullName = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    if(fullName === '' || email === '' || password === ''){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Enter Required feild",
  footer: '<a href="#">Why do I have this issue?</a>'
})}

else{
    const { data, error } = await supabase.auth.signUp({
    name : fullName,    
    email,
    password,
})
window.open('./login.html','_self')
} 
})


