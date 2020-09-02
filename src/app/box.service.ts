import { Box } from './shared/box.model';

export class BoxService {
    Boxes: Box[] = [
    ] 
    getBoxes(){
        return this.Boxes;
    }
    onAddBox(box: Box){
        this.Boxes.push(box);
    }
    onUpdateBox(box: Box, index: number){
         this.Boxes[index] = box;
    }
    setPosition(element){
        let boundingClientRect = element.getBoundingClientRect();
        let parentNode = element.parentNode.parentNode;
        let parentPosition = this.getPosition(parentNode);
        let left = boundingClientRect.x - parentPosition.left;
        let top = boundingClientRect.y - parentPosition.top; 

        return { xcord: left, ycord: top }
    }

    getPosition(el) {
        let x = 0;
        let y = 0;
        while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: y, left: x };
    }

}