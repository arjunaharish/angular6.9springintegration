
import { Component } from '@angular/core';

@Component({
selector: 'tutorial-root',
templateUrl: './tutorial.component.html',
styleUrls: ['./app.component.css']

})
export class TutorialComponent{
public title="Tutorial Component";
public imgSource="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjkmcO4sOrhAhUJeKwKHZzoBUQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thespruceeats.com%2Fhow-to-make-dosa-1957716&psig=AOvVaw3LKKBLD7-X4v-UMBXKWkQe&ust=1556251951685701";
public fname;
public lname;
myName="brandon";
onSubmit(value:any){
console.log(value);
}

}
