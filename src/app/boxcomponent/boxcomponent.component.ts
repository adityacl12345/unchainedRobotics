import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Box } from '../shared/box.model';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-boxcomponent',
  templateUrl: './boxcomponent.component.html',
  styleUrls: ['./boxcomponent.component.css']
})
export class BoxcomponentComponent implements OnInit {
  @Input() boxid: number;
  @Input() xcord: number;
  @Input() ycord: number;
  @Input() turns: number;
  public getRotation;
  public getNoRotation;
  
  constructor(private boxservice: BoxService) { }

  ngOnInit(): void { 
    this.getRotation = {transform: 'translate('+this.xcord+'px, '+this.ycord+'px) rotate('+this.turns+'deg)'};
    this.getNoRotation = { transform: 'rotate(-'+this.turns+'deg)'}
  }

  onRotate(event) {
    this.turns += 90;
    if(this.turns >= 360){
      this.turns = 0; 
    }
    let element = event.target.parentNode;
    let newPosition = this.boxservice.setPosition(element);
    this.xcord = newPosition.xcord; 
    this.ycord = newPosition.ycord; 
    this.boxservice.onUpdateBox(new Box(this.xcord, this.ycord, this.turns), this.boxid);

  }
  onDragEnded(event) {
    let element = event.source.getRootElement();
    let newPosition = this.boxservice.setPosition(element);
    this.xcord = newPosition.xcord; 
    this.ycord = newPosition.ycord; 
    this.boxservice.onUpdateBox(new Box(this.xcord, this.ycord, this.turns), this.boxid);
    console.log(this.boxservice.getBoxes())
  }

  

}
