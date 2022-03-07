var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeBusinessLogic = function () {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        var result = this.strategy.execute(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    };
    return Context;
}());
var strategySort = /** @class */ (function () {
    function strategySort() {
    }
    strategySort.prototype.execute = function (data) {
        console.log('Client: Strategy is set to normal sorting.');
        return data.sort();
    };
    return strategySort;
}());
var strategyReverse = /** @class */ (function () {
    function strategyReverse() {
    }
    strategyReverse.prototype.execute = function (data) {
        console.log('Client: Strategy is set to reverse sorting.');
        return data.reverse();
    };
    return strategyReverse;
}());
var context = new Context(new strategySort());
context.executeBusinessLogic();
console.log(' ');
context.setStrategy(new strategyReverse());
context.executeBusinessLogic();
