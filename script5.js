const imgDiv=document.querySelector('.logo-upload');
const img=document.querySelector('#pic');
const file=document.querySelector('#file');
const uploadBtn=document.querySelector('#upload');
var uploaded_image="";

file.addEventListener('change', (e) => {
    const chosen = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result;
        uploaded_image = reader.result;
    }
    reader.readAsDataURL(chosen);
    console.log(reader)
})