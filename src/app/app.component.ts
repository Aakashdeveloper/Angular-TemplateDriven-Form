import {Component} from '@angular/core';
import {Employee} from './models/employee.model'

@Component({
    selector:'main-comp',
    templateUrl:'./app.component.html'
    
})

export class AppComponent{
    languages=["Nodejs","AngularJs","ReactJs"];
    model = new Employee("Edureka","Angular",true,"male","Nodejs");

    firstToUpper(value:string){
        if(value.length>0)
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        else
            this.model.firstName=value
    }
}
/*
ng-untouched  ng-pristine ng-valid
ng-touched    ng-dirty    ng-invalid*/