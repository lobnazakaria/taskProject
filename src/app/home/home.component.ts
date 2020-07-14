import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostService } from '../service/post-service.service';
@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    contactForm: FormGroup
    slidesStore = [
        {
            id:'1',
            header:'Research',
            parag:'We must evaluate the precedents and acquire the largest amount of data regarding what we want to give solution'
        },
        {
            id:'2',
            header:'Design',
            parag:'It’s time to play, to create, to immerse yourself in the theme and get the best strategy for your users'
        },
        {
            id:'3',
            header:'Prototype',
            parag:'But the last word is the users, evaluate the design of their hand they ensure that in the end you have the perfect product for them'
        },
        {
            id:'4',
            header:'Improve',
            parag:'Re think things with all the feedback received from users and apply them to the design involves people in the process achieving a better goal'
        },
        {
            id:'5',
            header:'Deploy',
            parag:'Once out of the design flow, the solution is deployed, thought and adjusted to the real needs of the users'
        },
        {
            id:'6',
            header:'Support',
            parag:'In the end, you will not be alone, any disturbance, mishap or stumble with the final product, we will look for you again the best solution together'
        },
    ]
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        margin:10,
        navSpeed: 700,
        navText: ['<', '>'],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
        },
        nav: true
    }
    constructor(private fb: FormBuilder, private postService: PostService){}
    ngOnInit(){
        this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            service: [''],
            priority:[''],
            description: ['']
        })
    }
    submit(){
        debugger;
        let body = this.contactForm.value;
        console.log(body);
        this.postService.postContact(body).subscribe(res => {
            console.log(res)
        })
    }
}