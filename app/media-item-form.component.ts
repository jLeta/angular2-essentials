import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

    form;

    ngOnInit(){
        this.form = new ControlGroup({
            'medium': new Control('Movies'),

            'name': new Control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),

            'category': new Control(''),
            'year': new Control('', this.yearValidator)             
        });

    }

    yearValidator(control){
        //null means it is valid!!!!! 
        if(control.value.trim().length === 0) return null;
        var year = parseInt(control.value);

        var minyear = 1800;
        var maxyear = 2500;        
        if(year  >= minyear && year <= maxyear) return null;

        //otherwise return any object that will be avaliable for the validator to use.
        //notice how the property 'name' is referaned in the html template to get value 
        //of the returned object
        return {'year': {'min':minyear, 'max':maxyear}};

    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}