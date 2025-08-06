// login page work start

const supabaseUrl = 'https://grdpokfywpqvporuxfry.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHBva2Z5d3BxdnBvcnV4ZnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODc3NTEsImV4cCI6MjA2OTk2Mzc1MX0.vMX2To9Sa3ltrlnyOOZ_DGAO-tMhVumX08qiEQ2k6P8'
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