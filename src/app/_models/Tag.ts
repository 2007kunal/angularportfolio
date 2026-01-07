export class Tag {
    static readonly Angular = new Tag('Angular', 'red');
    static readonly TypeScript = new Tag('TypeScript', 'blue');
    static readonly JavaScript = new Tag('JavaScript', 'yellow');
    static readonly Python = new Tag('Python', 'orange');
    static readonly Java = new Tag('Java', 'green');
    static readonly CSharp = new Tag('C#', 'purple');
    static readonly REACT = new Tag('React', 'pink');
    static readonly NodeJS = new Tag('NodeJS', 'green');
    static readonly ASPNET = new Tag('ASP.NET', 'teal');
   
    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString(){
        return this.key;
    }
}