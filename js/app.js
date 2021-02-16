// Test the performance 
let t1 = performance.now();

/**
 * Define Global Variables
 * 
*/
let Sections   = document.querySelectorAll('section');
let listContainer = document.getElementById('nav-list');
/**
 * End Global Variables
 * 
*/
// build the nav
for (let section of Sections) 
{
    let listItem = document.createElement('li');
    let anchorTag = document.createElement('a');
    let sectionIDAttribute = section.getAttribute('id');
    let sectionDataAttribute = section.getAttribute('data-nav');
    anchorTag.setAttribute('href',`#${sectionIDAttribute}`);
    let textOfAnchor = document.createTextNode(sectionDataAttribute);
    anchorTag.appendChild(textOfAnchor);
    listItem.appendChild(anchorTag);
    listContainer.appendChild(listItem);
}
let currentSection = document.querySelectorAll('#nav-list li a');
document.addEventListener('scroll', function () {
    Sections.forEach((section) => 
    {
        let rect = section.getBoundingClientRect();
        let sectionName = section.getAttribute('data-nav');
        toTop = rect.top;
        if (toTop>=0 && toTop<=150) 
        {
            for (let sect of Sections) 
            {
                sect.classList.remove('your-active-class');
            }
            for (let link of currentSection)
             {
                link.classList.remove('active');
                if (sectionName === link.textContent) 
                {
                    link.classList.add('active');
                }
            }
            section.classList.add('your-active-class');
        }
    });
})
// scroll to the clicked section 
for (let link of currentSection) 
{
    link.addEventListener("click", function (e) 
    {
        e.preventDefault(); // prevent default scroll to add smooth scroll
        const href = link.getAttribute("href"); // #section1 for example
        document.querySelector(href).scrollIntoView(
        {
            behavior: "smooth"
        })
    });
}
// This function  will be used in small screens 
function toggleNav()
{
    let  list = document.getElementById("nav-list");
    if ( list.style.display == "block") list.style.display = "none";
     else  list.style.display = "block";
}
// handle the scroll Button  of the page 
let topBotton = document.querySelector(".top") 
window.onscroll= () =>
{
    if(window.pageYOffset>300)  topBotton.style.display= 'block' ; 
    else topBotton.style.display= 'none' ;  
}
topBotton.addEventListener('click' , scroll) 
function  scroll()   {window.scrollTo(0,0);}

// Test the performance 
let t2 = performance.now();
console.log(`The performance is ${t2=t1}`)
