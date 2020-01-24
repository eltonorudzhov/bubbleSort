export default class Sort {
  constructor(props) {
    this.count = props.count;
    this.speed = (13 - props.speed) * 100;
  }

  sortBubble() {
    if (this.count == 1) {
      return;
    }
    let i = this.count - 1;
    let interv;
    setTimeout(function run() {
      interv = (i + 3) * this.speed;
      timer(i)
      if (i > 1) {
        setTimeout(run, interv);
      } else {
        this.changeClass(0, "simple");
        this.changeClass(1, "simple");
        return;
      }
      i--;
    }, interv);
  }
  changeClass(id, className) {
    document.getElementById("td" + id).setAttribute("class", className);
  }
  timer(i) {
    let j = 0;
    this.changeClass(0, "checker");
    let firstTimer = setInterval(function() {
      if (j == i - 1) {
        this.changeClass(j, "simple");
        clearInterval(firstTimer);
      }
      this.check(i, j).bind(this);
      j++;
    }, this.speed);
  }

  check(i, j){
    if (
      +document.getElementById("td" + j).textContent >
      +document.getElementById("td" + (j + 1)).textContent
    ) {
      this.change(j);
    } else {
      setTimeout(() => {
        console.log("хы");
        if (j + 2 <= i) this.changeClass(j + 1, "checker");
        else this.changeClass(j + 1, "simple");
      }, 50);
      if (j + 2 <= i) this.changeClass(j + 1, "checked");
      this.changeClass(j, "simple");
    }
  }
  change(j) {
    document
      .getElementById("td" + j)
      .parentNode.insertBefore(
        document.getElementById("td" + (j + 1)),
        document.getElementById("td" + j)
      );
    document.getElementById("td" + j).id = "td" + (j + 1);
    document.getElementById("td" + (j + 1)).id = "td" + j;
  }
}
