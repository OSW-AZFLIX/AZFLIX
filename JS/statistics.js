function showChart(obj) {
    var text = obj.innerText;
    switch (text) {
        case "Jan":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart1);
            break;
        case "Feb":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart2);
            break;
        case "Mar":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart3);
            break;
        case "Apr":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart4);
            break;
        case "May":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart5);
            break;
        case "Jun":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart6);
            break;
        case "Jul":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart7);
            break;
        case "Aug":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart8);
            break;
        case "Sep":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart9);
            break;
        case "Oct":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart10);
            break;
        case "Nov":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart11);
            break;
        case "Dec":
            document.getElementById("viewership").style.display = "block";
            google.charts.setOnLoadCallback(drawChart12);
            break;
    }
}
google.charts.setOnLoadCallback(paymentChart);


function drawChart1() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[0].genre[0].name, jsonData.monthly_data[0].genre[0].rate, jsonData.monthly_data[0].genre[0].rate.toString()],
        [jsonData.monthly_data[0].genre[1].name, jsonData.monthly_data[0].genre[1].rate, jsonData.monthly_data[0].genre[1].rate.toString()],
        [jsonData.monthly_data[0].genre[2].name, jsonData.monthly_data[0].genre[2].rate, jsonData.monthly_data[0].genre[2].rate.toString()],
        [jsonData.monthly_data[0].genre[3].name, jsonData.monthly_data[0].genre[3].rate, jsonData.monthly_data[0].genre[3].rate.toString()],
        [jsonData.monthly_data[0].genre[4].name, jsonData.monthly_data[0].genre[4].rate, jsonData.monthly_data[0].genre[4].rate.toString()],
        [jsonData.monthly_data[0].genre[5].name, jsonData.monthly_data[0].genre[5].rate, jsonData.monthly_data[0].genre[5].rate.toString()],
        [jsonData.monthly_data[0].genre[6].name, jsonData.monthly_data[0].genre[6].rate, jsonData.monthly_data[0].genre[6].rate.toString()],
        [jsonData.monthly_data[0].genre[7].name, jsonData.monthly_data[0].genre[7].rate, jsonData.monthly_data[0].genre[7].rate.toString()],
        [jsonData.monthly_data[0].genre[8].name, jsonData.monthly_data[0].genre[8].rate, jsonData.monthly_data[0].genre[8].rate.toString()],
        [jsonData.monthly_data[0].genre[9].name, jsonData.monthly_data[0].genre[9].rate, jsonData.monthly_data[0].genre[9].rate.toString()],
        [jsonData.monthly_data[0].genre[10].name, jsonData.monthly_data[0].genre[10].rate, jsonData.monthly_data[0].genre[10].rate.toString()],
        [jsonData.monthly_data[0].genre[11].name, jsonData.monthly_data[0].genre[11].rate, jsonData.monthly_data[0].genre[11].rate.toString()],
        [jsonData.monthly_data[0].genre[12].name, jsonData.monthly_data[0].genre[12].rate, jsonData.monthly_data[0].genre[12].rate.toString()],
        [jsonData.monthly_data[0].genre[13].name, jsonData.monthly_data[0].genre[13].rate, jsonData.monthly_data[0].genre[13].rate.toString()],
        [jsonData.monthly_data[0].genre[14].name, jsonData.monthly_data[0].genre[14].rate, jsonData.monthly_data[0].genre[14].rate.toString()],
        [jsonData.monthly_data[0].genre[15].name, jsonData.monthly_data[0].genre[15].rate, jsonData.monthly_data[0].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'January Viewership',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart2() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[1].genre[0].name, jsonData.monthly_data[1].genre[0].rate, jsonData.monthly_data[1].genre[0].rate.toString()],
        [jsonData.monthly_data[1].genre[1].name, jsonData.monthly_data[1].genre[1].rate, jsonData.monthly_data[1].genre[1].rate.toString()],
        [jsonData.monthly_data[1].genre[2].name, jsonData.monthly_data[1].genre[2].rate, jsonData.monthly_data[1].genre[2].rate.toString()],
        [jsonData.monthly_data[1].genre[3].name, jsonData.monthly_data[1].genre[3].rate, jsonData.monthly_data[1].genre[3].rate.toString()],
        [jsonData.monthly_data[1].genre[4].name, jsonData.monthly_data[1].genre[4].rate, jsonData.monthly_data[1].genre[4].rate.toString()],
        [jsonData.monthly_data[1].genre[5].name, jsonData.monthly_data[1].genre[5].rate, jsonData.monthly_data[1].genre[5].rate.toString()],
        [jsonData.monthly_data[1].genre[6].name, jsonData.monthly_data[1].genre[6].rate, jsonData.monthly_data[1].genre[6].rate.toString()],
        [jsonData.monthly_data[1].genre[7].name, jsonData.monthly_data[1].genre[7].rate, jsonData.monthly_data[1].genre[7].rate.toString()],
        [jsonData.monthly_data[1].genre[8].name, jsonData.monthly_data[1].genre[8].rate, jsonData.monthly_data[1].genre[8].rate.toString()],
        [jsonData.monthly_data[1].genre[9].name, jsonData.monthly_data[1].genre[9].rate, jsonData.monthly_data[1].genre[9].rate.toString()],
        [jsonData.monthly_data[1].genre[10].name, jsonData.monthly_data[1].genre[10].rate, jsonData.monthly_data[1].genre[10].rate.toString()],
        [jsonData.monthly_data[1].genre[11].name, jsonData.monthly_data[1].genre[11].rate, jsonData.monthly_data[1].genre[11].rate.toString()],
        [jsonData.monthly_data[1].genre[12].name, jsonData.monthly_data[1].genre[12].rate, jsonData.monthly_data[1].genre[12].rate.toString()],
        [jsonData.monthly_data[1].genre[13].name, jsonData.monthly_data[1].genre[13].rate, jsonData.monthly_data[1].genre[13].rate.toString()],
        [jsonData.monthly_data[1].genre[14].name, jsonData.monthly_data[1].genre[14].rate, jsonData.monthly_data[1].genre[14].rate.toString()],
        [jsonData.monthly_data[1].genre[15].name, jsonData.monthly_data[1].genre[15].rate, jsonData.monthly_data[1].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'February Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart3() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[2].genre[0].name, jsonData.monthly_data[2].genre[0].rate, jsonData.monthly_data[2].genre[0].rate.toString()],
        [jsonData.monthly_data[2].genre[1].name, jsonData.monthly_data[2].genre[1].rate, jsonData.monthly_data[2].genre[1].rate.toString()],
        [jsonData.monthly_data[2].genre[2].name, jsonData.monthly_data[2].genre[2].rate, jsonData.monthly_data[2].genre[2].rate.toString()],
        [jsonData.monthly_data[2].genre[3].name, jsonData.monthly_data[2].genre[3].rate, jsonData.monthly_data[2].genre[3].rate.toString()],
        [jsonData.monthly_data[2].genre[4].name, jsonData.monthly_data[2].genre[4].rate, jsonData.monthly_data[2].genre[4].rate.toString()],
        [jsonData.monthly_data[2].genre[5].name, jsonData.monthly_data[2].genre[5].rate, jsonData.monthly_data[2].genre[5].rate.toString()],
        [jsonData.monthly_data[2].genre[6].name, jsonData.monthly_data[2].genre[6].rate, jsonData.monthly_data[2].genre[6].rate.toString()],
        [jsonData.monthly_data[2].genre[7].name, jsonData.monthly_data[2].genre[7].rate, jsonData.monthly_data[2].genre[7].rate.toString()],
        [jsonData.monthly_data[2].genre[8].name, jsonData.monthly_data[2].genre[8].rate, jsonData.monthly_data[2].genre[8].rate.toString()],
        [jsonData.monthly_data[2].genre[9].name, jsonData.monthly_data[2].genre[9].rate, jsonData.monthly_data[2].genre[9].rate.toString()],
        [jsonData.monthly_data[2].genre[10].name, jsonData.monthly_data[2].genre[10].rate, jsonData.monthly_data[2].genre[10].rate.toString()],
        [jsonData.monthly_data[2].genre[11].name, jsonData.monthly_data[2].genre[11].rate, jsonData.monthly_data[2].genre[11].rate.toString()],
        [jsonData.monthly_data[2].genre[12].name, jsonData.monthly_data[2].genre[12].rate, jsonData.monthly_data[2].genre[12].rate.toString()],
        [jsonData.monthly_data[2].genre[13].name, jsonData.monthly_data[2].genre[13].rate, jsonData.monthly_data[2].genre[13].rate.toString()],
        [jsonData.monthly_data[2].genre[14].name, jsonData.monthly_data[2].genre[14].rate, jsonData.monthly_data[2].genre[14].rate.toString()],
        [jsonData.monthly_data[2].genre[15].name, jsonData.monthly_data[2].genre[15].rate, jsonData.monthly_data[2].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'March Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart4() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[3].genre[0].name, jsonData.monthly_data[3].genre[0].rate, jsonData.monthly_data[3].genre[0].rate.toString()],
        [jsonData.monthly_data[3].genre[1].name, jsonData.monthly_data[3].genre[1].rate, jsonData.monthly_data[3].genre[1].rate.toString()],
        [jsonData.monthly_data[3].genre[2].name, jsonData.monthly_data[3].genre[2].rate, jsonData.monthly_data[3].genre[2].rate.toString()],
        [jsonData.monthly_data[3].genre[3].name, jsonData.monthly_data[3].genre[3].rate, jsonData.monthly_data[3].genre[3].rate.toString()],
        [jsonData.monthly_data[3].genre[4].name, jsonData.monthly_data[3].genre[4].rate, jsonData.monthly_data[3].genre[4].rate.toString()],
        [jsonData.monthly_data[3].genre[5].name, jsonData.monthly_data[3].genre[5].rate, jsonData.monthly_data[3].genre[5].rate.toString()],
        [jsonData.monthly_data[3].genre[6].name, jsonData.monthly_data[3].genre[6].rate, jsonData.monthly_data[3].genre[6].rate.toString()],
        [jsonData.monthly_data[3].genre[7].name, jsonData.monthly_data[3].genre[7].rate, jsonData.monthly_data[3].genre[7].rate.toString()],
        [jsonData.monthly_data[3].genre[8].name, jsonData.monthly_data[3].genre[8].rate, jsonData.monthly_data[3].genre[8].rate.toString()],
        [jsonData.monthly_data[3].genre[9].name, jsonData.monthly_data[3].genre[9].rate, jsonData.monthly_data[3].genre[9].rate.toString()],
        [jsonData.monthly_data[3].genre[10].name, jsonData.monthly_data[3].genre[10].rate, jsonData.monthly_data[3].genre[10].rate.toString()],
        [jsonData.monthly_data[3].genre[11].name, jsonData.monthly_data[3].genre[11].rate, jsonData.monthly_data[3].genre[11].rate.toString()],
        [jsonData.monthly_data[3].genre[12].name, jsonData.monthly_data[3].genre[12].rate, jsonData.monthly_data[3].genre[12].rate.toString()],
        [jsonData.monthly_data[3].genre[13].name, jsonData.monthly_data[3].genre[13].rate, jsonData.monthly_data[3].genre[13].rate.toString()],
        [jsonData.monthly_data[3].genre[14].name, jsonData.monthly_data[3].genre[14].rate, jsonData.monthly_data[3].genre[14].rate.toString()],
        [jsonData.monthly_data[3].genre[15].name, jsonData.monthly_data[3].genre[15].rate, jsonData.monthly_data[3].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'April Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart5() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[4].genre[0].name, jsonData.monthly_data[4].genre[0].rate, jsonData.monthly_data[5].genre[0].rate.toString()],
        [jsonData.monthly_data[4].genre[1].name, jsonData.monthly_data[4].genre[1].rate, jsonData.monthly_data[5].genre[1].rate.toString()],
        [jsonData.monthly_data[4].genre[2].name, jsonData.monthly_data[4].genre[2].rate, jsonData.monthly_data[5].genre[2].rate.toString()],
        [jsonData.monthly_data[4].genre[3].name, jsonData.monthly_data[4].genre[3].rate, jsonData.monthly_data[5].genre[3].rate.toString()],
        [jsonData.monthly_data[4].genre[4].name, jsonData.monthly_data[4].genre[4].rate, jsonData.monthly_data[5].genre[4].rate.toString()],
        [jsonData.monthly_data[4].genre[5].name, jsonData.monthly_data[4].genre[5].rate, jsonData.monthly_data[5].genre[5].rate.toString()],
        [jsonData.monthly_data[4].genre[6].name, jsonData.monthly_data[4].genre[6].rate, jsonData.monthly_data[5].genre[6].rate.toString()],
        [jsonData.monthly_data[4].genre[7].name, jsonData.monthly_data[4].genre[7].rate, jsonData.monthly_data[5].genre[7].rate.toString()],
        [jsonData.monthly_data[4].genre[8].name, jsonData.monthly_data[4].genre[8].rate, jsonData.monthly_data[5].genre[8].rate.toString()],
        [jsonData.monthly_data[4].genre[9].name, jsonData.monthly_data[4].genre[9].rate, jsonData.monthly_data[5].genre[9].rate.toString()],
        [jsonData.monthly_data[4].genre[10].name, jsonData.monthly_data[4].genre[10].rate, jsonData.monthly_data[5].genre[10].rate.toString()],
        [jsonData.monthly_data[4].genre[11].name, jsonData.monthly_data[4].genre[11].rate, jsonData.monthly_data[5].genre[11].rate.toString()],
        [jsonData.monthly_data[4].genre[12].name, jsonData.monthly_data[4].genre[12].rate, jsonData.monthly_data[5].genre[12].rate.toString()],
        [jsonData.monthly_data[4].genre[13].name, jsonData.monthly_data[4].genre[13].rate, jsonData.monthly_data[5].genre[13].rate.toString()],
        [jsonData.monthly_data[4].genre[14].name, jsonData.monthly_data[4].genre[14].rate, jsonData.monthly_data[5].genre[14].rate.toString()],
        [jsonData.monthly_data[4].genre[15].name, jsonData.monthly_data[4].genre[15].rate, jsonData.monthly_data[5].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'May Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart6() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[5].genre[0].name, jsonData.monthly_data[5].genre[0].rate, jsonData.monthly_data[5].genre[0].rate.toString()],
        [jsonData.monthly_data[5].genre[1].name, jsonData.monthly_data[5].genre[1].rate, jsonData.monthly_data[5].genre[1].rate.toString()],
        [jsonData.monthly_data[5].genre[2].name, jsonData.monthly_data[5].genre[2].rate, jsonData.monthly_data[5].genre[2].rate.toString()],
        [jsonData.monthly_data[5].genre[3].name, jsonData.monthly_data[5].genre[3].rate, jsonData.monthly_data[5].genre[3].rate.toString()],
        [jsonData.monthly_data[5].genre[4].name, jsonData.monthly_data[5].genre[4].rate, jsonData.monthly_data[5].genre[4].rate.toString()],
        [jsonData.monthly_data[5].genre[5].name, jsonData.monthly_data[5].genre[5].rate, jsonData.monthly_data[5].genre[5].rate.toString()],
        [jsonData.monthly_data[5].genre[6].name, jsonData.monthly_data[5].genre[6].rate, jsonData.monthly_data[5].genre[6].rate.toString()],
        [jsonData.monthly_data[5].genre[7].name, jsonData.monthly_data[5].genre[7].rate, jsonData.monthly_data[5].genre[7].rate.toString()],
        [jsonData.monthly_data[5].genre[8].name, jsonData.monthly_data[5].genre[8].rate, jsonData.monthly_data[5].genre[8].rate.toString()],
        [jsonData.monthly_data[5].genre[9].name, jsonData.monthly_data[5].genre[9].rate, jsonData.monthly_data[5].genre[9].rate.toString()],
        [jsonData.monthly_data[5].genre[10].name, jsonData.monthly_data[5].genre[10].rate, jsonData.monthly_data[5].genre[10].rate.toString()],
        [jsonData.monthly_data[5].genre[11].name, jsonData.monthly_data[5].genre[11].rate, jsonData.monthly_data[5].genre[11].rate.toString()],
        [jsonData.monthly_data[5].genre[12].name, jsonData.monthly_data[5].genre[12].rate, jsonData.monthly_data[5].genre[12].rate.toString()],
        [jsonData.monthly_data[5].genre[13].name, jsonData.monthly_data[5].genre[13].rate, jsonData.monthly_data[5].genre[13].rate.toString()],
        [jsonData.monthly_data[5].genre[14].name, jsonData.monthly_data[5].genre[14].rate, jsonData.monthly_data[5].genre[14].rate.toString()],
        [jsonData.monthly_data[5].genre[15].name, jsonData.monthly_data[5].genre[15].rate, jsonData.monthly_data[5].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'June Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart7() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[6].genre[0].name, jsonData.monthly_data[6].genre[0].rate, jsonData.monthly_data[6].genre[0].rate.toString()],
        [jsonData.monthly_data[6].genre[1].name, jsonData.monthly_data[6].genre[1].rate, jsonData.monthly_data[6].genre[1].rate.toString()],
        [jsonData.monthly_data[6].genre[2].name, jsonData.monthly_data[6].genre[2].rate, jsonData.monthly_data[6].genre[2].rate.toString()],
        [jsonData.monthly_data[6].genre[3].name, jsonData.monthly_data[6].genre[3].rate, jsonData.monthly_data[6].genre[3].rate.toString()],
        [jsonData.monthly_data[6].genre[4].name, jsonData.monthly_data[6].genre[4].rate, jsonData.monthly_data[6].genre[4].rate.toString()],
        [jsonData.monthly_data[6].genre[5].name, jsonData.monthly_data[6].genre[5].rate, jsonData.monthly_data[6].genre[5].rate.toString()],
        [jsonData.monthly_data[6].genre[6].name, jsonData.monthly_data[6].genre[6].rate, jsonData.monthly_data[6].genre[6].rate.toString()],
        [jsonData.monthly_data[6].genre[7].name, jsonData.monthly_data[6].genre[7].rate, jsonData.monthly_data[6].genre[7].rate.toString()],
        [jsonData.monthly_data[6].genre[8].name, jsonData.monthly_data[6].genre[8].rate, jsonData.monthly_data[6].genre[8].rate.toString()],
        [jsonData.monthly_data[6].genre[9].name, jsonData.monthly_data[6].genre[9].rate, jsonData.monthly_data[6].genre[9].rate.toString()],
        [jsonData.monthly_data[6].genre[10].name, jsonData.monthly_data[6].genre[10].rate, jsonData.monthly_data[6].genre[10].rate.toString()],
        [jsonData.monthly_data[6].genre[11].name, jsonData.monthly_data[6].genre[11].rate, jsonData.monthly_data[6].genre[11].rate.toString()],
        [jsonData.monthly_data[6].genre[12].name, jsonData.monthly_data[6].genre[12].rate, jsonData.monthly_data[6].genre[12].rate.toString()],
        [jsonData.monthly_data[6].genre[13].name, jsonData.monthly_data[6].genre[13].rate, jsonData.monthly_data[6].genre[13].rate.toString()],
        [jsonData.monthly_data[6].genre[14].name, jsonData.monthly_data[6].genre[14].rate, jsonData.monthly_data[6].genre[14].rate.toString()],
        [jsonData.monthly_data[6].genre[15].name, jsonData.monthly_data[6].genre[15].rate, jsonData.monthly_data[6].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'July Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart8() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[7].genre[0].name, jsonData.monthly_data[7].genre[0].rate, jsonData.monthly_data[7].genre[0].rate.toString()],
        [jsonData.monthly_data[7].genre[1].name, jsonData.monthly_data[7].genre[1].rate, jsonData.monthly_data[7].genre[1].rate.toString()],
        [jsonData.monthly_data[7].genre[2].name, jsonData.monthly_data[7].genre[2].rate, jsonData.monthly_data[7].genre[2].rate.toString()],
        [jsonData.monthly_data[7].genre[3].name, jsonData.monthly_data[7].genre[3].rate, jsonData.monthly_data[7].genre[3].rate.toString()],
        [jsonData.monthly_data[7].genre[4].name, jsonData.monthly_data[7].genre[4].rate, jsonData.monthly_data[7].genre[4].rate.toString()],
        [jsonData.monthly_data[7].genre[5].name, jsonData.monthly_data[7].genre[5].rate, jsonData.monthly_data[7].genre[5].rate.toString()],
        [jsonData.monthly_data[7].genre[6].name, jsonData.monthly_data[7].genre[6].rate, jsonData.monthly_data[7].genre[6].rate.toString()],
        [jsonData.monthly_data[7].genre[7].name, jsonData.monthly_data[7].genre[7].rate, jsonData.monthly_data[7].genre[7].rate.toString()],
        [jsonData.monthly_data[7].genre[8].name, jsonData.monthly_data[7].genre[8].rate, jsonData.monthly_data[7].genre[8].rate.toString()],
        [jsonData.monthly_data[7].genre[9].name, jsonData.monthly_data[7].genre[9].rate, jsonData.monthly_data[7].genre[9].rate.toString()],
        [jsonData.monthly_data[7].genre[10].name, jsonData.monthly_data[7].genre[10].rate, jsonData.monthly_data[7].genre[10].rate.toString()],
        [jsonData.monthly_data[7].genre[11].name, jsonData.monthly_data[7].genre[11].rate, jsonData.monthly_data[7].genre[11].rate.toString()],
        [jsonData.monthly_data[7].genre[12].name, jsonData.monthly_data[7].genre[12].rate, jsonData.monthly_data[7].genre[12].rate.toString()],
        [jsonData.monthly_data[7].genre[13].name, jsonData.monthly_data[7].genre[13].rate, jsonData.monthly_data[7].genre[13].rate.toString()],
        [jsonData.monthly_data[7].genre[14].name, jsonData.monthly_data[7].genre[14].rate, jsonData.monthly_data[7].genre[14].rate.toString()],
        [jsonData.monthly_data[7].genre[15].name, jsonData.monthly_data[7].genre[15].rate, jsonData.monthly_data[7].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'August Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart9() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[8].genre[0].name, jsonData.monthly_data[8].genre[0].rate, jsonData.monthly_data[8].genre[0].rate.toString()],
        [jsonData.monthly_data[8].genre[1].name, jsonData.monthly_data[8].genre[1].rate, jsonData.monthly_data[8].genre[1].rate.toString()],
        [jsonData.monthly_data[8].genre[2].name, jsonData.monthly_data[8].genre[2].rate, jsonData.monthly_data[8].genre[2].rate.toString()],
        [jsonData.monthly_data[8].genre[3].name, jsonData.monthly_data[8].genre[3].rate, jsonData.monthly_data[8].genre[3].rate.toString()],
        [jsonData.monthly_data[8].genre[4].name, jsonData.monthly_data[8].genre[4].rate, jsonData.monthly_data[8].genre[4].rate.toString()],
        [jsonData.monthly_data[8].genre[5].name, jsonData.monthly_data[8].genre[5].rate, jsonData.monthly_data[8].genre[5].rate.toString()],
        [jsonData.monthly_data[8].genre[6].name, jsonData.monthly_data[8].genre[6].rate, jsonData.monthly_data[8].genre[6].rate.toString()],
        [jsonData.monthly_data[8].genre[7].name, jsonData.monthly_data[8].genre[7].rate, jsonData.monthly_data[8].genre[7].rate.toString()],
        [jsonData.monthly_data[8].genre[8].name, jsonData.monthly_data[8].genre[8].rate, jsonData.monthly_data[8].genre[8].rate.toString()],
        [jsonData.monthly_data[8].genre[9].name, jsonData.monthly_data[8].genre[9].rate, jsonData.monthly_data[8].genre[9].rate.toString()],
        [jsonData.monthly_data[8].genre[10].name, jsonData.monthly_data[8].genre[10].rate, jsonData.monthly_data[8].genre[10].rate.toString()],
        [jsonData.monthly_data[8].genre[11].name, jsonData.monthly_data[8].genre[11].rate, jsonData.monthly_data[8].genre[11].rate.toString()],
        [jsonData.monthly_data[8].genre[12].name, jsonData.monthly_data[8].genre[12].rate, jsonData.monthly_data[8].genre[12].rate.toString()],
        [jsonData.monthly_data[8].genre[13].name, jsonData.monthly_data[8].genre[13].rate, jsonData.monthly_data[8].genre[13].rate.toString()],
        [jsonData.monthly_data[8].genre[14].name, jsonData.monthly_data[8].genre[14].rate, jsonData.monthly_data[8].genre[14].rate.toString()],
        [jsonData.monthly_data[8].genre[15].name, jsonData.monthly_data[8].genre[15].rate, jsonData.monthly_data[8].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'September Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart10() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[9].genre[0].name, jsonData.monthly_data[9].genre[0].rate, jsonData.monthly_data[9].genre[0].rate.toString()],
        [jsonData.monthly_data[9].genre[1].name, jsonData.monthly_data[9].genre[1].rate, jsonData.monthly_data[9].genre[1].rate.toString()],
        [jsonData.monthly_data[9].genre[2].name, jsonData.monthly_data[9].genre[2].rate, jsonData.monthly_data[9].genre[2].rate.toString()],
        [jsonData.monthly_data[9].genre[3].name, jsonData.monthly_data[9].genre[3].rate, jsonData.monthly_data[9].genre[3].rate.toString()],
        [jsonData.monthly_data[9].genre[4].name, jsonData.monthly_data[9].genre[4].rate, jsonData.monthly_data[9].genre[4].rate.toString()],
        [jsonData.monthly_data[9].genre[5].name, jsonData.monthly_data[9].genre[5].rate, jsonData.monthly_data[9].genre[5].rate.toString()],
        [jsonData.monthly_data[9].genre[6].name, jsonData.monthly_data[9].genre[6].rate, jsonData.monthly_data[9].genre[6].rate.toString()],
        [jsonData.monthly_data[9].genre[7].name, jsonData.monthly_data[9].genre[7].rate, jsonData.monthly_data[9].genre[7].rate.toString()],
        [jsonData.monthly_data[9].genre[8].name, jsonData.monthly_data[9].genre[8].rate, jsonData.monthly_data[9].genre[8].rate.toString()],
        [jsonData.monthly_data[9].genre[9].name, jsonData.monthly_data[9].genre[9].rate, jsonData.monthly_data[9].genre[9].rate.toString()],
        [jsonData.monthly_data[9].genre[10].name, jsonData.monthly_data[9].genre[10].rate, jsonData.monthly_data[9].genre[10].rate.toString()],
        [jsonData.monthly_data[9].genre[11].name, jsonData.monthly_data[9].genre[11].rate, jsonData.monthly_data[9].genre[11].rate.toString()],
        [jsonData.monthly_data[9].genre[12].name, jsonData.monthly_data[9].genre[12].rate, jsonData.monthly_data[9].genre[12].rate.toString()],
        [jsonData.monthly_data[9].genre[13].name, jsonData.monthly_data[9].genre[13].rate, jsonData.monthly_data[9].genre[13].rate.toString()],
        [jsonData.monthly_data[9].genre[14].name, jsonData.monthly_data[9].genre[14].rate, jsonData.monthly_data[9].genre[14].rate.toString()],
        [jsonData.monthly_data[9].genre[15].name, jsonData.monthly_data[9].genre[15].rate, jsonData.monthly_data[9].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'October Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart11() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[10].genre[0].name, jsonData.monthly_data[10].genre[0].rate, jsonData.monthly_data[10].genre[0].rate.toString()],
        [jsonData.monthly_data[10].genre[1].name, jsonData.monthly_data[10].genre[1].rate, jsonData.monthly_data[10].genre[1].rate.toString()],
        [jsonData.monthly_data[10].genre[2].name, jsonData.monthly_data[10].genre[2].rate, jsonData.monthly_data[10].genre[2].rate.toString()],
        [jsonData.monthly_data[10].genre[3].name, jsonData.monthly_data[10].genre[3].rate, jsonData.monthly_data[10].genre[3].rate.toString()],
        [jsonData.monthly_data[10].genre[4].name, jsonData.monthly_data[10].genre[4].rate, jsonData.monthly_data[10].genre[4].rate.toString()],
        [jsonData.monthly_data[10].genre[5].name, jsonData.monthly_data[10].genre[5].rate, jsonData.monthly_data[10].genre[5].rate.toString()],
        [jsonData.monthly_data[10].genre[6].name, jsonData.monthly_data[10].genre[6].rate, jsonData.monthly_data[10].genre[6].rate.toString()],
        [jsonData.monthly_data[10].genre[7].name, jsonData.monthly_data[10].genre[7].rate, jsonData.monthly_data[10].genre[7].rate.toString()],
        [jsonData.monthly_data[10].genre[8].name, jsonData.monthly_data[10].genre[8].rate, jsonData.monthly_data[10].genre[8].rate.toString()],
        [jsonData.monthly_data[10].genre[9].name, jsonData.monthly_data[10].genre[9].rate, jsonData.monthly_data[10].genre[9].rate.toString()],
        [jsonData.monthly_data[10].genre[10].name, jsonData.monthly_data[10].genre[10].rate, jsonData.monthly_data[10].genre[10].rate.toString()],
        [jsonData.monthly_data[10].genre[11].name, jsonData.monthly_data[10].genre[11].rate, jsonData.monthly_data[10].genre[11].rate.toString()],
        [jsonData.monthly_data[10].genre[12].name, jsonData.monthly_data[10].genre[12].rate, jsonData.monthly_data[10].genre[12].rate.toString()],
        [jsonData.monthly_data[10].genre[13].name, jsonData.monthly_data[10].genre[13].rate, jsonData.monthly_data[10].genre[13].rate.toString()],
        [jsonData.monthly_data[10].genre[14].name, jsonData.monthly_data[10].genre[14].rate, jsonData.monthly_data[10].genre[14].rate.toString()],
        [jsonData.monthly_data[10].genre[15].name, jsonData.monthly_data[10].genre[15].rate, jsonData.monthly_data[10].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'November Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function drawChart12() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['genre', 'Viewership', {role:'annotation'}],
        [jsonData.monthly_data[11].genre[0].name, jsonData.monthly_data[11].genre[0].rate, jsonData.monthly_data[11].genre[0].rate.toString()],
        [jsonData.monthly_data[11].genre[1].name, jsonData.monthly_data[11].genre[1].rate, jsonData.monthly_data[11].genre[1].rate.toString()],
        [jsonData.monthly_data[11].genre[2].name, jsonData.monthly_data[11].genre[2].rate, jsonData.monthly_data[11].genre[2].rate.toString()],
        [jsonData.monthly_data[11].genre[3].name, jsonData.monthly_data[11].genre[3].rate, jsonData.monthly_data[11].genre[3].rate.toString()],
        [jsonData.monthly_data[11].genre[4].name, jsonData.monthly_data[11].genre[4].rate, jsonData.monthly_data[11].genre[4].rate.toString()],
        [jsonData.monthly_data[11].genre[5].name, jsonData.monthly_data[11].genre[5].rate, jsonData.monthly_data[11].genre[5].rate.toString()],
        [jsonData.monthly_data[11].genre[6].name, jsonData.monthly_data[11].genre[6].rate, jsonData.monthly_data[11].genre[6].rate.toString()],
        [jsonData.monthly_data[11].genre[7].name, jsonData.monthly_data[11].genre[7].rate, jsonData.monthly_data[11].genre[7].rate.toString()],
        [jsonData.monthly_data[11].genre[8].name, jsonData.monthly_data[11].genre[8].rate, jsonData.monthly_data[11].genre[8].rate.toString()],
        [jsonData.monthly_data[11].genre[9].name, jsonData.monthly_data[11].genre[9].rate, jsonData.monthly_data[11].genre[9].rate.toString()],
        [jsonData.monthly_data[11].genre[10].name, jsonData.monthly_data[11].genre[10].rate, jsonData.monthly_data[11].genre[10].rate.toString()],
        [jsonData.monthly_data[11].genre[11].name, jsonData.monthly_data[11].genre[11].rate, jsonData.monthly_data[11].genre[11].rate.toString()],
        [jsonData.monthly_data[11].genre[12].name, jsonData.monthly_data[11].genre[12].rate, jsonData.monthly_data[11].genre[12].rate.toString()],
        [jsonData.monthly_data[11].genre[13].name, jsonData.monthly_data[11].genre[13].rate, jsonData.monthly_data[11].genre[13].rate.toString()],
        [jsonData.monthly_data[11].genre[14].name, jsonData.monthly_data[11].genre[14].rate, jsonData.monthly_data[11].genre[14].rate.toString()],
        [jsonData.monthly_data[11].genre[15].name, jsonData.monthly_data[11].genre[15].rate, jsonData.monthly_data[11].genre[15].rate.toString()],
    ]);
    var options = {
        title: 'December Viewership',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('viewership'));
    chart.draw(data, options);
}

function paymentChart() {
    var jsonData = JSON.parse(JSON.stringify(DATA));
    var data = google.visualization.arrayToDataTable([
        ['month', 'payment', {role:'annotation'}],
        [jsonData.monthly_data[0].month, jsonData.monthly_data[0].payment, jsonData.monthly_data[0].payment.toString()],
        [jsonData.monthly_data[1].month, jsonData.monthly_data[1].payment, jsonData.monthly_data[1].payment.toString()],
        [jsonData.monthly_data[2].month, jsonData.monthly_data[2].payment, jsonData.monthly_data[2].payment.toString()],
        [jsonData.monthly_data[3].month, jsonData.monthly_data[3].payment, jsonData.monthly_data[3].payment.toString()],
        [jsonData.monthly_data[4].month, jsonData.monthly_data[4].payment, jsonData.monthly_data[4].payment.toString()],
        [jsonData.monthly_data[5].month, jsonData.monthly_data[5].payment, jsonData.monthly_data[5].payment.toString()],
        [jsonData.monthly_data[6].month, jsonData.monthly_data[6].payment, jsonData.monthly_data[6].payment.toString()],
        [jsonData.monthly_data[7].month, jsonData.monthly_data[7].payment, jsonData.monthly_data[7].payment.toString()],
        [jsonData.monthly_data[8].month, jsonData.monthly_data[8].payment, jsonData.monthly_data[8].payment.toString()],
        [jsonData.monthly_data[9].month, jsonData.monthly_data[9].payment, jsonData.monthly_data[9].payment.toString()],
        [jsonData.monthly_data[10].month, jsonData.monthly_data[10].payment, jsonData.monthly_data[10].payment.toString()],
        [jsonData.monthly_data[11].month, jsonData.monthly_data[11].payment, jsonData.monthly_data[11].payment.toString()]
    ]);
    var options = {
        title: 'Monthly Payment',
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('payment'));
    chart.draw(data, options);
}