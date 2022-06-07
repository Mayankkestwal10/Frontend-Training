// Factory Pattern

function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory(name, type) {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

function say() {
    console.log("Hi, my name is", this.name, "and I am a", this.type)
}

const factory = new EmployeeFactory()
const employees = []

employees.push(factory.create("Mayank", 1))
employees.push(factory.create("Tester", 2))
console.log(employees)

employees.forEach(emp => {
    say.call(emp)
})


