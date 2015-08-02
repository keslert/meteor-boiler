var colors = ['#8DCA36', '#01BFDD', '#FF702A', '#D0462A', '#B66AD7'];
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

Utils = {
  getColor: function(n) {
    return colors[n % colors.length];
  },
  getDayOfWeek: function(n) {
    return daysOfWeek[n];
  }
}