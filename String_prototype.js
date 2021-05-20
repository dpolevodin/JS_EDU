String.prototype.palindrome = function() {
    let str = this.split('').reverse().join('');
    if (this.valueOf() === str) {
        return true;
    }
}

'POP'.palindrome(); // return true
