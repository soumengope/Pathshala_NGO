const btn = document.querySelector('#btn');

btn.onClick = ()=>{
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}