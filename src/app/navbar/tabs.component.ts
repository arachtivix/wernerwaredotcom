import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'wernerware-tabs',
  templateUrl: './tabs.component.html'
})
export class WernerwareTabs implements OnInit {
    tabs = TABS;
    constructor(private router: Router){}
    ngOnInit(): void {
        this.router.events.subscribe((event) =>{
            if( event instanceof NavigationEnd ){
                let url = event.urlAfterRedirects;
                console.log(event);
                let selected = TABS.filter((tab) => {return tab.link === url});
                if( selected.length > 0 ){
                    TABS[active].css = '';
                    active = selected[0].index;
                    selected[0].css = 'active';
                }
            }
        });
    }
}

class WernerwareTab {
    index: number;
    label: string;
    link: string;
    css: string;
}

const TABS: WernerwareTab[] = [
    {index: 0, label: 'Home', link: '/main', css: 'active'},
    {index: 1, label: 'About', link: '/about', css: ''}
];

let active: number = 0;