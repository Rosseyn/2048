function Tile(position, value) {
  this.tileSequence = [1,2,3,5,8,13,21,34,55,89,144];
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 0;
  this.display          = this.tileSequence[value]

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
