class Employee {
    name: string
    id_number: number
    department: string
    job_title: string

    constructor(name: string, id_nuumber: number, department: string, job_title: string){
        this.name = name
        this.id_number = id_nuumber
        this.department = department
        this.job_title = job_title
    }

    print(){
        console.log(`${this.name}   ${this.id_number}   ${this.department}   ${this.job_title}`)
    }

}


const susan = new Employee("Susan Meyers", 47899, "Accounting", "Vice President")
const mark = new Employee("Mark Jones  ", 39119, "IT  ", "  Programmer")
const joy = new Employee("Joy Rogers  ", 81774, "Manufacturing", "Engineer")

susan.print()
mark.print()
joy.print()

