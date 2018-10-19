import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent implements OnInit {
posts:any[];
  constructor(private service:PostService) { }

  ngOnInit(){
      this.service.getPost()
      .subscribe(Response=>{
      this.posts=Response.json();
    }
    );
  }

createPost(input:HTMLInputElement){
  let post={title:input.value};
  input.value='';
  this.service.createPost(post)
  .subscribe(Response=>{post["id"]=Response.json().id;
  this.posts.splice(0,0,post);
  });
}
updatePost(post)
{
  this.service.updatePost(post)
  .subscribe(Response=> {
    let index=this.posts.indexOf(post);
    
    
  });
}
deletePost(post){
  this.service.deletePost(post)
  .subscribe(Response=> {
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1)
    confirm("Do you want to delete this post");
    alert("You deleted one post successfully");
  })
}

}