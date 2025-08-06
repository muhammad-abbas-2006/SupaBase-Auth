// Working for signup page

const supabaseUrl = 'https://grdpokfywpqvporuxfry.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHBva2Z5d3BxdnBvcnV4ZnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODc3NTEsImV4cCI6MjA2OTk2Mzc1MX0.vMX2To9Sa3ltrlnyOOZ_DGAO-tMhVumX08qiEQ2k6P8'
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

