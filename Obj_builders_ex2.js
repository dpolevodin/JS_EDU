function Cofee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if (this.ounces == 8) {
            return 'small';
        } else if (this.ounces == 12) {
            return 'medium';
        } else {
            return 'large';
        }
    };
    this.toString = function() {
        return "You've ordered a " + this.getSize() + ' ' + this.roast + ' cofee.';
    }
}

let HouseBlend = new Cofee('House blend', 12);
console.log(HouseBlend.toString());

let darkRoast = new Cofee('darkRoast', 16);
console.log(darkRoast.toString());
