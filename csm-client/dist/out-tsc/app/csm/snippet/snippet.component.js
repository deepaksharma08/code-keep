import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SnippetComponent = class SnippetComponent {
    constructor() {
        this.snippets = [];
        this.selectedSnippet = {};
        this.snippets = this.generateFakeSnippets();
    }
    ngOnInit() {
    }
    generateFakeSnippets() {
        let response = [
            {
                title: "Snippet1Snippet1Snippet1",
                description: "Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1",
                code: `//variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate); 
        /variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate)
        /variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate)
         `
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
            {
                title: "Snippet1",
                description: "Description for snippet1"
            },
        ];
        this.selectedSnippet = response[0];
        return response;
    }
    rowClick(snippet) {
        this.selectedSnippet = snippet;
    }
};
SnippetComponent = __decorate([
    Component({
        selector: 'app-snippet',
        templateUrl: './snippet.component.html',
        styleUrls: ['./snippet.component.css']
    })
], SnippetComponent);
export { SnippetComponent };
//# sourceMappingURL=snippet.component.js.map