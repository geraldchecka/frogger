export default function Player(context, config) {
  this.context = context;
  this.row = config.characterInitialise.row;
  this.col = config.characterInitialise.col;
}