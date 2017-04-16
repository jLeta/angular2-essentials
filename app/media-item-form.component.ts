
import { Component, Inject } from 'angular2/core';
import { Control, Validators, FormBuilder } from 'angular2/common';
import { MediaItemService } from './media.item.service';
import { LOOKUP_LIST } from './providers';


@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

    form;

    constructor(private formBuilder: FormBuilder,
        private mediaItemService: MediaItemService,
        @Inject(LOOKUP_LIST) public lookupLists) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            'medium': new Control('Movies'),

            'name': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),

            'category': new Control(''),
            'year': new Control('', this.yearValidator)
        });

    }

    yearValidator(control) {
        //null means it is valid!!!!! 
        if (control.value.trim().length === 0) return null;
        var year = parseInt(control.value);

        var minyear = 1800;
        var maxyear = 2500;
        if (year >= minyear && year <= maxyear) return null;

        //otherwise return any object that will be avaliable for the validator to use.
        //notice how the property 'name' is referaned in the html template to get value 
        //of the returned object
        return { 'year': { 'min': minyear, 'max': maxyear } };

    }

    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem);
    }
}