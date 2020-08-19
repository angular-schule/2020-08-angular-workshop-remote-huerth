export class Customer {

    constructor(private id: number, private name?: string) {}

    fooBar(bar: string) {
        setTimeout(() => {
            console.log('Die ID ist', this.id, bar);
        }, 2000);

        const foo = `Hallo
Welt
${bar}`;
    }
}