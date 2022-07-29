function toggleClassName() {
    var sidebar = document.querySelector('.sidebar');
    var wrapper = document.querySelector('.wrapper');
    var Toggle = document.querySelector('.toggle');
    var header = document.querySelector('.header');
    var rightnav = document.querySelector('.rightnav');
    sidebar.classList.toggle('active')
    wrapper.classList.toggle('active')
    Toggle.classList.toggle('active')
    header.classList.toggle('active')
    rightnav.classList.toggle('active')

}

// function toggleClassName(){
// if(document.getElementById("sidebar").style.width === "0px"){
//     document.getElementById("sidebar").style.width = "250px";
//     document.getElementById("wrapper").style.marginLeft = "250px";
//     document.getElementById("header").style.marginLeft = "250px";
// }
// else{
//     document.getElementById("sidebar").style.width = "0px";
//     document.getElementById("wrapper").style.marginLeft = "0px";
//     document.getElementById("header").style.marginLeft = "0px";
// }

// }
function notification() {
    var notification1 = document.querySelector('.notification1');
    var notify = document.querySelector('.notify-item');
    var greenicon = document.querySelector('.icon-button__badge');

    notification1.classList.toggle('active')
    notify.classList.toggle('active')
    greenicon.classList.toggle('active')
}
function dropdown() {
    var name = document.querySelector('.name');
    var smalldown = document.querySelector('.smalldown');
    var profile = document.querySelector('.profile');
    var profiledown = document.querySelector('.profiledown');


    name.classList.toggle('active')
    smalldown.classList.toggle('active')
    profile.classList.toggle('active')
    profiledown.classList.toggle('active')
}




// ---google charts----





google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['France', 4260],
        ['Italy', 3970],
        ['Japan', 4260],
        ['Canada', 3970],
        
    ]);

    var options = {
        pieHole: 0.4,
        chartArea: {'width': '100%', 'height': '60%'},
        textStyle: {fontSize: 14},
        legend: { position: 'bottom' ,},
        pieSliceText: "none"
    };
    

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

window.onresize = () => {
    location.reload();
  }