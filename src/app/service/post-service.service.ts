import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PostService {
     headers = { 'content-type': 'application/json'} 
    private baseUrl = 'https://example.com/api/contact';
    constructor(private http: HttpClient){}
    postContact(body){
      return  this.http.post(this.baseUrl , body, {'headers':this.headers})
    }
}