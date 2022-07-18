document.querySelector('.ham').addEventListener("click", () => {

    setTimeout(() => {
        document.querySelector('.navbar').classList.toggle('h-res');
        document.querySelector('.navlist').classList.toggle('v-class');





        document.querySelector('.btn').classList.toggle('v-class');

    }, 600);




})