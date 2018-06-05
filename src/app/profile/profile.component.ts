import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string;
  user:any;
  repo:any;

  constructor(private profileService:ProfileService) { }

  search(){
    this.profileService.getUser().subscribe(user => {
      console.log(user);
      this.user=user;
    });

    this.profileService.getRepo().subscribe(repo => {
      console.log(repo);
      this.repo=repo;
    });
    this.profileService.updateUser(this.username);

    }

    reset() {
      this.user = null;
      this.username = null;
    }


  ngOnInit() {
  }

}
