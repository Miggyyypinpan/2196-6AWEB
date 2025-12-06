import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [ FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',

})
export class DataBinding {
message = 'Data-Binding Demonstration';
imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnJa3PH5l8VFVfTFef66r7jMjbwsBrbU22w&s";
w = 150;
h = 150;
isHighlighted = true;
altText ='brainrot tralalero tralala';
textColor = 'green';
yourName = 'Miguel-Vernard Pinpin';

count = 0;
increment() {
  this.count++;
}
decrement() {
  this.count--;

}
// Interpolation
studentName = "Miguel-Vernard Pinpin";
score = 95;

// Property binding
imageUrls = "https://tse1.mm.bing.net/th/id/OIP.7zydCM17owl_JRhWp57avwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";
isDisabled = true;

// Attribute binding
colSpanValue = 3;

// Class binding
isPassing = true;

// Style binding
boxColor = "blue";
boxSize = "150px";

}
