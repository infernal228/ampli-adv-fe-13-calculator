var calculator = {
  num: 0,
  add: function (value) {
    this.num = this.num + value;
  },
  clear: function () {
    this.num = 0;
  },
  equals: function () {
    return this.num;
  },
};
