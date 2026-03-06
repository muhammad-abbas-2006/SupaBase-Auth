// login page work start

const supabaseUrl = 
const supabaseKey =
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

document.getElementById('login-btn').addEventListener('click',async ()=>{
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    if(email === '' || password ===''){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Enter Required feild",
  footer: '<a href="#">Why do I have this issue?</a>'
})}
    else{
    const { data, error } = await supabase.auth.signInWithPassword({
    email:email,
    password:password,
})

if (error) {
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Enter Correct Credentials",
  footer: '<a href="#">Why do I have this issue?</a>'
})  
}
else{
Swal.fire({
  icon: "success",
  title: "Oops...",
  text: "Login Success fully",
}) 
window.open('./Dashboard.html','_self')

}}})
