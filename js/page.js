function records1() {
  var records = ["records/180115", "records/180119", "records/180120", "records/180121"];
  var records_name = ["2018.01.15", "2018.01.19", "2018.01.20", "2018.01.21"];

  for (var i = 0; i < records.length; i++) {
    var j = i;
    document.write("<li><a href=" + records[i] + ".html>" + records_name[j] + "</a></li>");
  }
}

function records2() {
  var records = ["../records/180115", "../records/180119", "../records/180120", "../records/180121"];
  var records_name = ["2018.01.15", "2018.01.19", "2018.01.20", "2018.01.21"];

  for (var i = 0; i < records.length; i++) {
    var j = i;
    document.write("<li><a href=" + records[i] + ".html>" + records_name[j] + "</a></li>");
  }
}

function nightDayHandler(self) {
  var target = document.getElementById('target');
  if (self.value == '야간모드') {
    target.className = 'black';
    self.value = '야간모드 해제';
  } else {
    target.className = 'white';
    self.value = '야간모드';
  }
}
