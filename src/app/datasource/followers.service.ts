import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Follower } from '../models/Follower';

@Injectable({ providedIn: 'root' })
export class FollowersService {
  constructor(private http: HttpClient) {}

  getFollowers(acc: string, page?: number) {
    return this.http
      .get(
        `https://api.github.com/users/${acc}/followers${
          page ? '?page=' + page : ''
        }`
      )
      .pipe(
        map((x) => {
          const arr = x as any[];
          return arr.map(
            (obj) =>
              ({
                login: obj.login,
                id: obj.id,
                nodeId: obj.node_id,
                avatarUrl: obj.avatar_url,
                gravatarId: obj.gravatar_id,
                url: obj.url,
                htmlUrl: obj.html_url,
                followersUrl: obj.followers_url,
                followingUrl: obj.following_url,
                gistsUrl: obj.gists_url,
                starredUrl: obj.starred_url,
                subscriptionsUrl: obj.subscriptions_url,
                organizationsUrl: obj.organizations_url,
                reposUrl: obj.repos_url,
                eventsUrl: obj.events_url,
                receivedEventsUrl: obj.received_events_url,
                type: obj.type,
                siteAdmin: obj.site_admin,
              } as Follower)
          );
        })
      );
  }
}
