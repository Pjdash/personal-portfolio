// const observer=new IntersectionObserver((entries))=>{
//     FileSystemEntry.foreach((entries)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     });
// }
// const hiddenElements =document.querySelectorAll(' ');
// hiddenElements.forEach((el)=> observer.observe(el));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Replace ' ' with your actual selector, e.g., '.hidden'
const hiddenElements = document.querySelectorAll('.hidden'); 

hiddenElements.forEach((el) => observer.observe(el));
