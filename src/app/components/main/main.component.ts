import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FollowersService } from 'src/app/datasource/followers.service';
import { Follower } from 'src/app/models/Follower';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction:column;
      }
    `,
  ],
})
export class MainComponent implements OnDestroy {
  private subscription?: Subscription;
  public githubAcc: string = '';
  public followers: Follower[] = [];

  constructor(private datasource: FollowersService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  loadFollowers(acc: string) {
    this.subscription = this.datasource.getFollowers(acc).subscribe((res) => {
      this.followers = res;
    });
  }
}
