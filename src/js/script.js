

const filterButtons = document.querySelectorAll('.filter-btn');




const getData = async () => {
    try {

        const response = await fetch('/data.json');

        if (!response.ok) throw new Error("Erreur lors du chargement des données");

        const data = await response.json();
        return data;
        
    } catch (error) {

        console.error(error.message);

    }

      
}


const updateUserInterface = async (period = "weekly") => {

    const data = await getData();

    if (!data) return;


    data.forEach(activity => {

        const activityName = activity.title.toLowerCase().replace(" ", "");
        const card = document.querySelector(`.${activityName}__card`);
    
        if (card) {
            const currentTag = card.querySelector(".current");
            const previousTag = card.querySelector(".previous");
    
            currentTag.textContent = `${activity.timeframes[period].current}hrs`;
            previousTag.textContent = `Previous - ${activity.timeframes[period].previous}hrs`;
        }
        
    });

}





filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const period = button.dataset.period;
        updateUserInterface(period);
    });
});

