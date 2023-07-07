function makeTicket(heightLine, ageLine) {
  return function (height, age) {
    if (height <= heightLine && age <= ageLine) {
      return "可以买儿童票";
    } else {
      return "只能买全价票";
    }
  };
}
var checkTicketA = makeTicket(100, 6);
var checkTicketB = makeTicket(120, 5);
var checkTicketC = makeTicket(90, 7);

console.log(checkTicketA(120, 5));
console.log(checkTicketB(120, 5));
console.log(checkTicketC(120, 5));
