const skillLanguage = {
  SolidEdge: 0,
  TeraTerm: 1,
  AccessVBA: 2,
  ExcelVBA: 3,
  CPP: 4,
  C: 5,
  Python: 6
}
var skillArray = ["Solid Edge", "Tera Term", "Access VBA", "Excel VBA", "C++", "C", "Python"];

var dateNow = new Date();
var dateYear = dateNow.getFullYear();
var dateMonth = dateNow.getMonth() + 1;
if (dateMonth < 10) dateMonth = '0' + dateMonth;
var dateStr = dateYear + '-' + dateMonth;

var dateArray = [
  [false, new Date('2018-08'), new Date('2019-06'), skillLanguage.SolidEdge],
  [false, new Date('2019-09'), new Date('2019-09'), skillLanguage.TeraTerm],
  [true, new Date('2019-10'), new Date('2020-03'), skillLanguage.AccessVBA],
  [true, new Date('2020-04'), new Date('2020-10'), skillLanguage.ExcelVBA],
  [true, new Date('2020-11'), new Date('2022-06'), skillLanguage.CPP],
  [true, new Date('2022-07'), new Date('2022-09'), skillLanguage.C],
  [true, new Date('2022-10'), new Date(dateStr), skillLanguage.CPP, skillLanguage.Python]
]

var skillDurations = new Array(Object.keys(skillLanguage).length).fill(0);
var diffYears;
var diffMonths;
var totalDiffMonths;
for (var i = 0; i < dateArray.length; i++) {
  if(dateArray[i][0]) {
    diffYears = dateArray[i][2].getFullYear() - dateArray[i][1].getFullYear();
    diffMonths = dateArray[i][2].getMonth() - dateArray[i][1].getMonth() + 1;
    totalDiffMonths = diffYears * 12 + diffMonths;
    skillDurations[dateArray[i][3]] = skillDurations[dateArray[i][3]] + totalDiffMonths;
    if (dateArray[i].length > 4) {
      skillDurations[dateArray[i][4]] = skillDurations[dateArray[i][4]] + totalDiffMonths;
    }
  }
}

var filteredSkillArray = [];
var filteredSkillDurations = [];
var totalMonths = 0;
for (var i = 0; i < skillDurations.length; i++) {
  if (skillDurations[i] != 0) {
    filteredSkillArray.push(skillArray[i]);
    filteredSkillDurations.push(skillDurations[i]);
    totalMonths = totalMonths + skillDurations[i];
  }
}
skillArray = filteredSkillArray;
skillDurations = filteredSkillDurations;

var skillDurationsPairs = skillArray.map(function (skillItem, index) {
  console.log(skillItem);
  console.log(skillDurations[index]);
  return {item: skillItem, duration: skillDurations[index]};
});
skillDurationsPairs.sort(function (a, b) {
  return b.duration - a.duration;
});
skillArray = skillDurationsPairs.map(function (pair) {
  return pair.item;
});
skillDurations = skillDurationsPairs.map(function (pair) {
  return pair.duration;
});

var ctx = document.getElementById("pieChart");
var pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: skillArray,
    datasets: [{
        backgroundColor: [
            "#696969",
            "#808080",
            "#A0A0A0",
            "#C0C0C0",
            "#E0E0E0"
        ],
        data: skillDurations
    }]
  },
  options: {
    title: {
      display: false,
      text: ''
    }
  }
});