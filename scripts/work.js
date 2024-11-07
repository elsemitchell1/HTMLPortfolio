const workHistory = [
    { id: 1, date: '2023-09-15', title: 'International Beauty Services & Supplies - Website Maintenance', description: 'Fulfilled website maintenance with International Beauty Services & Supplies Shopify Store. Tasks included updating product pages and grouping products by type/brand as well as organising products for monthly promotions.' },
    { id: 2, date: '2023-06-01', title: 'Just Natural Paws - Web Development Intern', description: 'Began my first internship as a web developer with Just Natural Paws. Built website from scratch using React JS and Google Firebase. Currently implementing a shopping cart and payment system.' },
    { id: 3, date: '2021-06-01', title: 'Athabasca University - Student', description: 'Currently starting my third year of a Computer Science degree specialising in Web Development.' },
    { id: 4, date: '2020-02-01', title: 'Rona - Delivery Driver', description: 'Packing and delivering products for Rona.' },
    { id: 5, date: '2017-05-10', title: 'Neumann Steel - Lead Fabricator', description: 'Promoted to leading maintenance Fabricator at Neuman Steel. Organising and completing maintenance repairs/servicing on large machinery.' },
    { id: 6, date: '2016-11-01', title: 'Neumann Steel - Mesh Welder', description: 'Welding structural mesh for industrial purposes.' },
    { id: 7, date: '2015-09-15', title: 'Solstice - Landscaping and Snow Removal', description: 'Part Landscaping and Snow Removal crew maintaining apartment building complexes around the city of Edmonton.' },
    { id: 8, date: '2014-10-01', title: 'Aurizon - Heavy Metal Fabrication Tradesman', description: 'Maintaining and repairing coal wagons and locomotives for Aurizon.' },
    { id: 9, date: '2010-10-01', title: 'Aurizon - Heavy Metal Fabrication Apprentice', description: 'Finalist for Apprentice of the year, developing problem solving abilities etc.' },
]
//fetch work component
let mainSection = document.getElementById("main-content");
/*fetch("../htmlcomponents/timeline.html")
    .then(response => response.text())
    .then(data => {*/
        workHistory.map(work => {
            let template = document.createElement("div");
            template.innerHTML = `
                <div class="timeline-container">
                    <div class="timeline-content-container">
                        <div class="timeline-content">
                            <div class="timeline-content-wrapper">
                                <h3 class="timeline-heading"></h3>
                                <h5 class="timeline-date text-gradient"></h5>
                                <p class="timeline-paragraph"></p>
                            </div>
                        </div>
                    </div>
                    <div class="rule"></div>
                    <div class="pointer"></div>
                </div>`;

            function createWork(template, work){
                template.querySelector(".timeline-container").style.flexDirection = work.id % 2 ? "row" : "row-reverse";
                template.querySelector(".timeline-heading").innerHTML = work.title;
                template.querySelector(".timeline-date").innerHTML = work.date;
                template.querySelector(".timeline-paragraph").innerHTML = work.description;
                mainSection.appendChild(template);
            }
            createWork(template, work);
        })
    //})