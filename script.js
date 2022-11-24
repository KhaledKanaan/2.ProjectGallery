var projs = document.getElementsByClassName('proj');
var projs_sec = document.getElementById('projs-sec');

// Add listeners for all projects cards open and close buttons
for(let i=0; i<projs.length; i++){
    projs[i].querySelector(".proj-open-desc").addEventListener('click', async (e)=>{
        await closeAllTheProjectCards();
        projs[i].querySelector(".proj-frst-card").classList.add("proj-frst-card-ad");
    });

    projs[i].querySelector(".proj-close-desc").addEventListener('click', (e)=>{
        projs[i].querySelector(".proj-frst-card").classList.remove("proj-frst-card-ad");   
    });
}

async function closeAllTheProjectCards(){
    for(let i=0; i<projs.length; i++){
        projs[i].querySelector(".proj-frst-card").classList.remove("proj-frst-card-ad");
    }
} 