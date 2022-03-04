interface Strategy {
    execute(data: string[]): string[]
}

class Context {

    constructor(
        private strategy: Strategy
    ) {}

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    public executeBusinessLogic(): void {

        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.execute(['a','b','c','d','e'])
        console.log(result.join(','))
    }
    
}


class strategySort implements Strategy {
    public execute(data: string[]): string[] {
        console.log('Client: Strategy is set to normal sorting.');
        return data.sort()
    }
}

class strategyReverse implements Strategy {
    public execute(data: string[]): string[] {
        console.log('Client: Strategy is set to reverse sorting.');
        return data.reverse()
    }
}

const context = new Context(new strategySort())
context.executeBusinessLogic();
console.log(' ')

context.setStrategy(new strategyReverse())
context.executeBusinessLogic();
