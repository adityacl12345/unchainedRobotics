import { Component} from '@angular/core';
import { Box } from './shared/box.model';
import { BoxService } from './box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DragAndDropApp';
  boxes: Box[];
  newbox: Box = new Box(0,0,0);
  constructor(private boxService: BoxService){
    this.boxes = this.boxService.getBoxes();
  }

  addBox(){
    this.boxService.onAddBox(this.newbox);
  }

}
